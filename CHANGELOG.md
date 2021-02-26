# SymLevel C++ Debugger Change Log


## Version 1.5.0

### Bug fixes
- Fixed displaying value of `std::unique_ptr` from new libstdc++ version
- Fixed displaying long stack traces
- Minor bug fixes and improvements

Release date: 03/01/2021


## Version 1.4.0

### New features
- Auto detection of Android SDK/NDK paths

### Bug fixes
- Small bug fixes in displaying variables

Release date: 11/24/2020

## Version 1.3.0

### New features
- Remote debugging support
- Android debugging support
- Support of user defined search paths for shared libraries
- Support of user defined initialization commands

### Bug fixes
- Fixed small bug in displaying result of std::bind
- Fixed critical bug causing random hangs

Release date: 08/21/2020


## Version 1.2.0

### New features
- LLVM libc++ Standard library support
- Improved resolving of dynamic value types for clang compiler

### Bug fixes
- Fixed bugs in displaying values of libstdc++ associative containers
- Fixed displaying long stack traces
- Fixed displaying pointer to member function values for recent gcc/clang compilers

Release date: 07/07/2020


## Version 1.1.1

### Bug fixes
- Fixed bug in displaying libc++ associative containers
- Fixed bug in error reporting while loading executables
- Fixed bugs in resolving dynamic types on Linux and Macos

Release date: 06/01/2020


## Version 1.1.0

### New features
- Support of environment variables in launch parameters
- Mark frames of Standard functional objects as subtle in call stack
- Launching in VS Code terminal on Windows
- Launching without debugging on Windows

Release date: 05/06/2020


## Version 1.0.0
Initial relase

Release date: 02/05/2020

