<!--
{% comment %}
Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to you under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
{% endcomment %}
-->

# How to update the project's web site

## Running locally

Before opening a pull request, you can preview your contributions by
running from within the directory:

```
export GEM_HOME=$HOME/.gem # Adjust this path as you want
export PATH=$PATH:$GEM_HOME/bin
bundle exec jekyll serve
Open [http://localhost:4000](http://localhost:4000)
```

Note: The Gemfile.lock may contain some platform specific pins
you may want to regenerate this by deleting `Gemfile.lock`
and running `bundle update`.  This is currently locked
for x86_64-linux, darwin, and freebsd by using the
`bundle lock --add-platform foo` command.


## Pushing to site

Site is updated by a CI job that runs the `publish.sh` script. Once this
runs it the results will be visible [here](https://nuttx.apache.org).

### Force Deployment

If a dependency has changed such as the external documentation you may
need to force the deployment CI to run. This can be done from the [CI
Actions](https://github.com/apache/nuttx-website/actions?query=workflow%3ACI)
tab and selecting **Run workflow** -> **Branch: master** --> **Run workflow**

![Trigger Workflow](ci-workflow.png)

## Adding contributors

To add a contributor to the project, or to modify existing contributors,
edit `site/_data/contributors.yml`.
The [project members](http://localhost:4000/community.html#project-members)
list will re-generate.
