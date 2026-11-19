# Terminal dependencies

These browser bundles are self-hosted so the demo does not depend on a CDN
or require a Node.js build step when building the website.

| npm package | Version | Files |
| --- | --- | --- |
| `@xterm/xterm` | `6.0.0` | `lib/xterm.js`, `css/xterm.css` |
| `@xterm/addon-fit` | `0.11.0` | `lib/addon-fit.js` |

Source: https://github.com/xtermjs/xterm.js

The files are copied unchanged from the corresponding npm release tarballs.
Each package's MIT license is included alongside its bundle. To update, fetch
the chosen versions with `npm pack`, copy the files listed above and their
licenses, and update this table.

## Integration checks

Run the byte transport and keyboard/scrolling adapter tests with:

```sh
node --test demo/terminal.test.cjs
```

In the demo, select text and use the browser's native copy/paste shortcuts
(Cmd+C/Cmd+V on macOS, Ctrl+C/Ctrl+V elsewhere). Ctrl+C without a selection
is forwarded to NuttX. Scrollback is contained inside the terminal, and the
Fit addon follows container resizing and font loading.
