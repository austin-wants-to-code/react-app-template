# 0.0.5 [2020-11-16]

## Added
  - The test-library/jest-dom library which provides matchers for common DOM assertions
  - Basic test-setup files for new library and any other necessary setup
  - Dependabot configuration to get automatic PRs for dependency upgrades

## Changed
  - Moved shared test hooks from test-util file to setup file (removes unwanted import from tests)

# 0.0.4 [2020-11-14]

## Added
  - The Jest test framework (test runner, assertion library & mocking library)
    - This was chosen over other frameworks as it is a comprehensive test-framework rather than being limited to handling only one or two functions (i.e. being a test runner, e.g. mocha or handling mocking, e.g. sinon) 
  - The react-test-library for overall better testing of React components 
    - This was chosen over other React test-libraries (such as Enzyme) due to its recommendation from the ReactJS Team and its core principal of encouraging tests to resemble how the software will actually be used rather than have them rely on internal details such as state. Also, I have used Enzyme before, and have been frustrated many times from certain parts of the API
  - The react-test-renderer library for more specific testing scenarios, like snapshot tests
  - Jest config for running tests, reporting code coverage and ignoring the index file
  - jsconfig file so that IDEs' intellisense can locate the Jest module. This is needed because Jest does imports at runtime (i.e. they are implicitly imported). 
  - Basic tests for App.js
  - Application constants file
  - Comments to index.js & App.js

## Changed
  - "test" and "test-watch" commands in package.json updated to now work with Jest
    - Updated README with the details on these commands
  - gitignore updated to ignore coverage reports
  - index.js updated to use contant for class
  - Text in App.js updated

# 0.0.3 [2020-10-31]

## Added
  - David badge to README for showing if dependencies are up-to-date or not
  - html-webpack-plugin & HTML template for output HTML
  - devbuild and build npm commands
  - Section to README for helpful resources 

## Changed
  - Upgraded to Webpack 5 (GH-5)
  - Upgraded dependencies to latest
  - Moved loaders & webpack dependencies to devDependencies section
  - Cleaned up previous CHANGELOG entries
  - Applied basic formatting to MD files

## Removed 
  - Unused webpack loaders/plugins
  - build-watch command

## Fixed
  - Local-server command in README

# 0.0.2 [2020-10-23]

## Added
  - Wakatime badge to README. Wakatime is an application that allows you to track the amount of time spent on development work (overall & at the commit level). Trying it here.

# 0.0.1 [2020-10-21]

## Added
  - Initial application template. Supports building & running application. (GH-2)