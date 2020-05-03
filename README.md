# Back & Forth

This small extension for VSCode adds go back/forward buttons to the title bar for easier navigation through recent edit locations and opened files.

They do the same as these default shortcuts:

| Command                        | Keybindings (Windows) | Keybindings (Mac)     | Keybindings (Linux)   |
| ------------------------------ | --------------------- | --------------------- | --------------------- |
| `Go back`                      | `Alt + ←`             | `Ctrl + -`            | `Ctrl + Alt + -`      |
| `Go forward`                   | `Alt + →`             | `Ctrl + Shift + -`    | `Ctrl + Shift + -`    |
| `Go to the last edit location` | `Ctrl + K` `Ctrl + Q` | `Ctrl + K` `Ctrl + Q` | `Ctrl + K` `Ctrl + Q` |

## How it works

![Demo](img/screenshots/demo.gif)

## Settings

| Name                                |                                          | Options                 | Default   |
| ----------------------------------- | ---------------------------------------- | ----------------------- | --------- |
| `back-n-forth.iconStyle`            | Changes type of icons                    | `"arrow"` / `"chevron"` | `"arrow"` |
| `back-n-forth.withLastEditLocation` | Adds "Go to the Last Edit Location" icon | `true` / `false`        | `false`   |

## Release Notes

### 3.0.x

- Add "Go to the Last Edit Location"
- Mess up semantic versioning

### 0.2.0

- Add ability to change icon style

### 0.1.0

- Initial release 🎉

**Enjoy!**
