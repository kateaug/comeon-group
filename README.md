![comeon-javascript-test-site](http://b5fa2dae67bf7ee0b0e5-e0d56d540e31d5f2f9430984d20d712d.r41.cf3.rackcdn.com/comeon-javascript-test_3.png)
# comeon-javascript-test

Applicant's test for Javascript coders.

### Setup mock api
```javascript
npm install -g json-server
```

### Run mock api
```javascript
json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js
```

## API
There are four methods on the API: login, logout, games, and categories.

### Login
Path: /login

Will give you player information.
It is possible to login with three accounts:

```
username: rebecka
password: secret

username: eric
password: dad

username: stoffe
password: rock
```


## Getting Started with Create React App
This project was bootstrapped with Create React App.

### Available Scripts
In the project directory, you can run:

### npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

### npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.