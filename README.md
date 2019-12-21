# SymLevel C++ Debugger

SymLevel C++ Debugger - is a debugger extension for VS Code. It implements many advanced features designed for debugging programs that extensively use modern C++ features like templates and functional programming.

## Features
### Advanced stepping functions
* Step to the target of functional objects
* Skip standard functions
* Customize step behavior

### Debugging functional style programs
* Display values of lambda expressions
* Display values of the standard functional objects

### Full support of the standard libstdc++ library
* STL containers and iterators
* Functional objects
* Utility types: std::any, std::variant, etc

### Cross platform
* Supported platforms: Linux, Windows, Macos
* Supported compilers: gcc, clang with libstdc++

See [http://symlevel.com/debugger/features-vscode](http://symlevel.com/debugger/features-vscode) for more details.

## Example configuration
The following ```launch.json``` example adds debug configuration in VS Code
that starts ```myexe``` executable for debugging with SLDB.
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "sldb",
            "request": "launch",
            "name": "(sldb) Launch",
            "program": "${workspaceFolder}/myexe",
            "args": ["aaa", "bbb"]
        }
    ]
}
```

See [http://symlevel.com/debugger/documentation](http://symlevel.com/debugger/documentation) for
description of all available configuration options.
