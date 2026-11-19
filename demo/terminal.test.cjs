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
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { test } = require('node:test');
const vm = require('node:vm');

function setup() {
    const elements = Object.fromEntries(
        ['term_container'].map(id =>
            [id, { disabled: true, events: {}, addEventListener(name, callback) {
                this.events[name] = callback;
            } }])
    );
    let terminal;
    class Terminal {
        constructor(options) {
            Object.assign(this, options);
            this.output = [];
            this.selection = '';
            this.element = { style: {} };
            terminal = this;
        }
        loadAddon() {}
        open() {}
        focus() {}
        onData(callback) { this.input = callback; }
        onResize(callback) { this.resize = callback; }
        onSelectionChange(callback) { this.selectionChanged = callback; }
        attachCustomKeyEventHandler(callback) { this.key = callback; }
        hasSelection() { return !!this.selection; }
        getSelection() { return this.selection; }
        paste(text) { this.input(text); }
        write(bytes) { this.output.push(Array.from(bytes)); }
        writeln() {}
    }
    const input = [];
    const context = vm.createContext({
        document: { getElementById: id => elements[id] },
        Terminal, TextEncoder, Uint8Array,
        FitAddon: { FitAddon: class { fit() {} } },
        ResizeObserver: class { observe() {} },
        requestAnimationFrame: callback => { callback(); return 1; },
        cancelAnimationFrame() {}
    });
    vm.runInContext(readFileSync(`${__dirname}/terminal.js`, 'utf8'), context);
    const adapter = new context.Term({ cols: 80, rows: 30, fontSize: 15 });
    adapter.setKeyHandler(data => input.push(data));
    adapter.open(elements.term_container);
    return { adapter, terminal, elements, input };
}

test('encodes pasted Unicode as UTF-8 bytes for the emulator', () => {
    const { terminal, input } = setup();
    terminal.input('echo 中文\r');
    assert.deepEqual([...input[0]].map(c => c.charCodeAt(0)),
        Array.from(new TextEncoder().encode('echo 中文\r')));
});

test('preserves console bytes across split UTF-8 output chunks', () => {
    const { adapter, terminal } = setup();
    adapter.write('\xe4\xb8');
    adapter.write('\xad\r\n');
    assert.deepEqual(terminal.output, [[0xe4, 0xb8], [0xad, 13, 10]]);
    terminal.cols = 60;
    terminal.rows = 20;
    assert.deepEqual(Array.from(adapter.getSize()), [60, 20]);
});

test('keeps native copy and paste while preserving Ctrl+C without a selection', () => {
    const { terminal } = setup();
    assert.equal(terminal.key({ key: 'c', ctrlKey: true }), true);
    terminal.selection = 'nsh>';
    assert.equal(terminal.key({ key: 'c', ctrlKey: true }), false);
    assert.equal(terminal.key({ key: 'C', metaKey: true }), false);
    assert.equal(terminal.key({ key: 'v', ctrlKey: true }), false);
});

test('contains terminal wheel events while allowing browser pinch zoom', () => {
    const { elements } = setup();
    for (const ctrlKey of [false, true]) {
        let prevented = false;
        let stopped = false;
        elements.term_container.events.wheel({ ctrlKey,
            preventDefault() { prevented = true; },
            stopPropagation() { stopped = true; }
        });
        assert.equal(prevented, !ctrlKey);
        assert.equal(stopped, true);
    }
});
