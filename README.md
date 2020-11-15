[![dependencies Status](https://david-dm.org/Austin-Miller-1/react-app-template.svg)](https://david-dm.org/Austin-Miller-1/react-app-template)
[![devDependencies Status](https://david-dm.org/Austin-Miller-1/react-app-template/dev-status.svg)](https://david-dm.org/Austin-Miller-1/react-app-template?type=dev)
[![time tracker](https://wakatime.com/badge/github/Austin-Miller-1/react-app-template.svg)](https://wakatime.com/badge/github/Austin-Miller-1/react-app-template)


# React Application Template
React.js Application Template

Entry point is the App.js component.

Commands:

- npm run test
    - Runs any tests found within the "tests" folder. After the tests have been executed, a code-coverage report will be created in the "coverage" folder.
- npm run test-watch
    - Runs tests as described for the "test" command, however, tests will be reran if any changes to the code have been made. Only tests reliant on the updated code will be reran. 
- npm run local-server
    - Runs the application locally via Webpack Dev Server. Hot reload is active.
- npm run devbuild
    - Builds the application using dev webpack properties.
- npm run devbuild-watch
    - Builds the application using dev webpack properties. Rebuilds when additional changes are made.
- npm run build
    - Builds the application using production webpack properties.

# Helpful Resources
Besides official documentation, here are some resources that I found helpful when making this application:

- webpack Boilerplate: taniarascia/webpack-boilerplate
