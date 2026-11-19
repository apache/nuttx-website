/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

/* Preserve the Term interface used by jslinux.js and the WASM console. */
function Term(options)
{
    this.terminal = new Terminal({
        cols: options.cols,
        rows: options.rows,
        scrollback: options.scrollback,
        fontSize: options.fontSize,
        fontFamily: "'JetBrains Mono', monospace",
        cursorBlink: true,
        screenReaderMode: true,
        theme: { background: "#000000", foreground: "#f0f0f0", cursor: "#00ff00" }
    });
    this.fit = new FitAddon.FitAddon();
    this.terminal.loadAddon(this.fit);
}

Term.prototype.setKeyHandler = function(handler)
{
    var encoder = new TextEncoder();
    this.terminal.onData(function(data) {
        var bytes = encoder.encode(data), binary = "";
        for (var i = 0; i < bytes.length; i++)
            binary += String.fromCharCode(bytes[i]);
        handler(binary);
    });
};

Term.prototype.open = function(parent)
{
    var terminal = this.terminal, fit = this.fit, pending_frame;
    terminal.open(parent);
    this.term_el = terminal.element;
    terminal.onResize(function() {
        if (typeof console_resize_event === "function")
            console_resize_event();
    });
    terminal.attachCustomKeyEventHandler(function(event) {
        var key = event.key.toLowerCase();
        return !((event.ctrlKey || event.metaKey) &&
                 (key === "v" || (key === "c" && terminal.hasSelection())));
    });
    parent.addEventListener("wheel", function(event) {
        if (!event.ctrlKey)
            event.preventDefault();
        event.stopPropagation();
    }, { passive: false });
    function schedule_fit() {
        cancelAnimationFrame(pending_frame);
        pending_frame = requestAnimationFrame(function() { fit.fit(); });
    }
    this.observer = new ResizeObserver(schedule_fit);
    this.observer.observe(parent);
    if (document.fonts)
        document.fonts.ready.then(schedule_fit);
    fit.fit();
    terminal.focus();
};

Term.prototype.getSize = function()
{
    return [this.terminal.cols, this.terminal.rows];
};

Term.prototype.write = function(binary)
{
    /* Preserve bytes, including UTF-8 characters split across writes. */
    this.terminal.write(Uint8Array.from(binary, function(c) { return c.charCodeAt(0); }));
};

Term.prototype.writeln = function(text)
{
    this.terminal.writeln(text);
};

Term.prototype.resizePixel = function()
{
    this.fit.fit();
    return false; /* onResize notifies the emulator when the grid changes. */
};
