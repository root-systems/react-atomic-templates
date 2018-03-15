# layout
[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Simple layout components that support presentational components

## Development
We are using Storybook for development:

```Bash
npm run storybook
```

At the moment we are using nwb for packaging:

```Bash
npm run build
```

The system uses a mobile first grid system based on 5 breakpoints
 - mobile (2)
 - tablet portrait (4)
 - tablet landscape (8)
 - HD (12)
 - UHD (16)
 
## Design considerations
All rows have default behavours defined through the breakpoints collapsing down to a single column on mobile. 

### Sections 
 - FullWidth sections assume you are using the 16 grid
 - All sections provide sensible padding on row areas
 - Standard section should be used with a maximum of 12 columns as it has a max width of 1600px (or equivelent)

## Todo: Add Components
 - [ ] FullWidth Section
 - [ ] Standard Section
 - [ ] Page
 - [ ] Row 16
 - [ ] Row 12,4
 - [ ] Row 4,12
 - [ ] Row 8,8
 - [ ] Row 4,4,8
 - [ ] Row 4,8,4
 - [ ] Row 8,4,4
 - [ ] Row 12
 - [ ] Row 6,6
 - [ ] Row 4,4,4
 - [ ] Row 3,3,3,3
 - [ ] Row 6,3,3
 - [ ] Row 3,3,6
 - [ ] Row 3,6,3
 - [ ] Row 8,4
 - [ ] Row 4,8
 - [ ] Row 3,9
 - [ ] Row 9,3
 - [ ] Row 2,2 (tablet-p)
 - [ ] Row 4,4 (tablet-l)
 - [ ] Row 1,1 (mobule)
 - [ ] Set content components order for mobile
 - [ ] Any row can have breakpoint column numbers specified - overiding defaults
 
[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/root-systems/layout.svg?branch=master

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
