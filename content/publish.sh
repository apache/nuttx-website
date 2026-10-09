#!/usr/bin/env bash
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to you under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

set -e

MODE="${1:---all}"

echo "==================================================================="
echo " Running publish.sh in mode: $MODE"
echo "==================================================================="

COMMIT_HASH_WEB=$(git rev-parse HEAD)
if [ -d "nuttx" ]; then
  COMMIT_HASH_NUTTX=$(git -C nuttx rev-parse HEAD 2>/dev/null || echo "HEAD")
else
  COMMIT_HASH_NUTTX="n/a"
fi

build_website() {
  echo " ===> Building Jekyll website into target/..."
  gem install bundler:2.1.2
  bundle config set path 'vendor/bundle'
  bundle install
  bundle exec jekyll clean --source .
  bundle exec jekyll build --source .
  # Gemfile.lock is sometimes updated, ignore that in CI.
  git checkout -- Gemfile.lock
}

stage_website_only() {
  echo " ===> Staging website updates to asf-site (preserving content/docs)..."
  if [ ! -d "target" ]; then
    echo "::error::Directory 'target' does not exist. Build the website first."
    exit 1
  fi

  git checkout asf-site
  git pull --rebase origin asf-site 2>/dev/null || true

  mkdir -p content
  TEMP_DOCS_BACKUP=""
  if [ -d "content/docs" ]; then
    TEMP_DOCS_BACKUP=$(mktemp -d)
    echo " ====> Backing up existing content/docs to $TEMP_DOCS_BACKUP/docs..."
    mv content/docs "$TEMP_DOCS_BACKUP/docs"
  fi

  rm -rf content
  mv target content

  if [ -n "$TEMP_DOCS_BACKUP" ] && [ -d "$TEMP_DOCS_BACKUP/docs" ]; then
    echo " ====> Restoring preserved content/docs..."
    mv "$TEMP_DOCS_BACKUP/docs" content/docs
    rm -rf "$TEMP_DOCS_BACKUP"
  fi

  git add content
  git status
  echo "Publishing website master branch $COMMIT_HASH_WEB"
  if git diff --staged --quiet; then
    echo "No changes to commit or publish for website."
  else
    git commit -a -m "Publishing web: $COMMIT_HASH_WEB"
  fi
}

stage_docs_only() {
  echo " ===> Staging documentation updates to asf-site (preserving website)..."
  if [ ! -d "docs" ]; then
    echo "::error::Directory 'docs' does not exist. Documentation must be generated first."
    exit 1
  fi

  # Temporarily store docs outside git tree so git checkout asf-site does not wipe untracked docs
  TEMP_STAGE_DOCS=$(mktemp -d)
  mv docs "$TEMP_STAGE_DOCS/docs"

  git checkout asf-site
  git pull --rebase origin asf-site 2>/dev/null || true

  mkdir -p content/docs
  cp -a "$TEMP_STAGE_DOCS/docs/." content/docs/
  rm -rf "$TEMP_STAGE_DOCS"

  git add content/docs
  git status
  echo "Publishing docs from NuttX master branch $COMMIT_HASH_NUTTX"
  if git diff --staged --quiet; then
    echo "No changes to commit or publish for docs."
  else
    git commit -a -m "Publishing docs: $COMMIT_HASH_NUTTX (web: $COMMIT_HASH_WEB)"
  fi
}

stage_all() {
  echo " ===> Staging website and documentation..."
  if [ ! -d "target" ]; then
    echo "::error::Directory 'target' does not exist. Build the website first."
    exit 1
  fi

  if [ -d "docs" ]; then
    rm -rf target/docs
    mv docs target/
  fi

  git checkout asf-site
  git pull --rebase origin asf-site 2>/dev/null || true

  # If docs was not present in target, preserve existing content/docs
  if [ ! -d "target/docs" ] && [ -d "content/docs" ]; then
    TEMP_DOCS_BACKUP=$(mktemp -d)
    mv content/docs "$TEMP_DOCS_BACKUP/docs"
    rm -rf content
    mv target content
    mv "$TEMP_DOCS_BACKUP/docs" content/docs
    rm -rf "$TEMP_DOCS_BACKUP"
  else
    rm -rf content
    mv target content
  fi

  git add content
  git status
  echo "Publishing website master branch $COMMIT_HASH_WEB"
  echo "Publishing docs from NuttX master branch $COMMIT_HASH_NUTTX"
  if git diff --staged --quiet; then
    echo "No changes to commit or publish."
  else
    git commit -a -m "Publishing web: $COMMIT_HASH_WEB docs: $COMMIT_HASH_NUTTX"
  fi
}

case "$MODE" in
  --website|-w)
    build_website
    stage_website_only
    ;;
  --docs|-d)
    stage_docs_only
    ;;
  --all|-a)
    build_website
    stage_all
    ;;
  *)
    echo "Unknown option $MODE. Usage: $0 [--website | --docs | --all]"
    exit 1
    ;;
esac

echo " "
echo "==================================================================="
echo "You are now on the asf-site branch with your new changes committed."
echo " git push the 'asf-site' branch upstream to update the live site."
echo "If you want to preview the content run a simple http server pointed"
echo " at the content directory. This can be accomplished like this:"
echo " python3 -m http.server --directory content 8080" 
echo "==================================================================="
echo " "

set +e
