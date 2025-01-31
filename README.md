verify-package-export
=================

Verify package exports


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/verify-package-export.svg)](https://npmjs.org/package/verify-package-export)
[![Downloads/week](https://img.shields.io/npm/dw/verify-package-export.svg)](https://npmjs.org/package/verify-package-export)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g verify-package-export
$ verify-package-export COMMAND
running command...
$ verify-package-export (--version)
verify-package-export/0.0.2 darwin-arm64 node-v22.11.0
$ verify-package-export --help [COMMAND]
USAGE
  $ verify-package-export COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`verify-package-export help [COMMAND]`](#verify-package-export-help-command)
* [`verify-package-export plugins`](#verify-package-export-plugins)
* [`verify-package-export plugins add PLUGIN`](#verify-package-export-plugins-add-plugin)
* [`verify-package-export plugins:inspect PLUGIN...`](#verify-package-export-pluginsinspect-plugin)
* [`verify-package-export plugins install PLUGIN`](#verify-package-export-plugins-install-plugin)
* [`verify-package-export plugins link PATH`](#verify-package-export-plugins-link-path)
* [`verify-package-export plugins remove [PLUGIN]`](#verify-package-export-plugins-remove-plugin)
* [`verify-package-export plugins reset`](#verify-package-export-plugins-reset)
* [`verify-package-export plugins uninstall [PLUGIN]`](#verify-package-export-plugins-uninstall-plugin)
* [`verify-package-export plugins unlink [PLUGIN]`](#verify-package-export-plugins-unlink-plugin)
* [`verify-package-export plugins update`](#verify-package-export-plugins-update)
* [`verify-package-export verify [PKGJSONPATH]`](#verify-package-export-verify-pkgjsonpath)

## `verify-package-export help [COMMAND]`

Display help for verify-package-export.

```
USAGE
  $ verify-package-export help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for verify-package-export.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.21/src/commands/help.ts)_

## `verify-package-export plugins`

List installed plugins.

```
USAGE
  $ verify-package-export plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ verify-package-export plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/index.ts)_

## `verify-package-export plugins add PLUGIN`

Installs a plugin into verify-package-export.

```
USAGE
  $ verify-package-export plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into verify-package-export.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the VERIFY_PACKAGE_EXPORT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the VERIFY_PACKAGE_EXPORT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ verify-package-export plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ verify-package-export plugins add myplugin

  Install a plugin from a github url.

    $ verify-package-export plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ verify-package-export plugins add someuser/someplugin
```

## `verify-package-export plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ verify-package-export plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ verify-package-export plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/inspect.ts)_

## `verify-package-export plugins install PLUGIN`

Installs a plugin into verify-package-export.

```
USAGE
  $ verify-package-export plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into verify-package-export.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the VERIFY_PACKAGE_EXPORT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the VERIFY_PACKAGE_EXPORT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ verify-package-export plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ verify-package-export plugins install myplugin

  Install a plugin from a github url.

    $ verify-package-export plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ verify-package-export plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/install.ts)_

## `verify-package-export plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ verify-package-export plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ verify-package-export plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/link.ts)_

## `verify-package-export plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ verify-package-export plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ verify-package-export plugins unlink
  $ verify-package-export plugins remove

EXAMPLES
  $ verify-package-export plugins remove myplugin
```

## `verify-package-export plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ verify-package-export plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/reset.ts)_

## `verify-package-export plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ verify-package-export plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ verify-package-export plugins unlink
  $ verify-package-export plugins remove

EXAMPLES
  $ verify-package-export plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/uninstall.ts)_

## `verify-package-export plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ verify-package-export plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ verify-package-export plugins unlink
  $ verify-package-export plugins remove

EXAMPLES
  $ verify-package-export plugins unlink myplugin
```

## `verify-package-export plugins update`

Update installed plugins.

```
USAGE
  $ verify-package-export plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.25/src/commands/plugins/update.ts)_

## `verify-package-export verify [PKGJSONPATH]`

Say hello

```
USAGE
  $ verify-package-export verify [PKGJSONPATH]

ARGUMENTS
  PKGJSONPATH  Path to a package.json file

DESCRIPTION
  Say hello

EXAMPLES
  $ verify-package-export verify ./package.json
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/verify/index.ts](https://github.com/HuakunShen/verify-package-export/blob/v0.0.2/src/commands/verify/index.ts)_
<!-- commandsstop -->
