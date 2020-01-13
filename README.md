This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Start

First, install everything required to run it by typing "npm install" in the console log.

You can then run the application by typing "npm start".

This will run the app on "localhost:3000".

## What the App does

You can add a task by typing in the name of the task, and clicking "Add".

You can mark a task as done by clicking "Done".

You can delete a task after it is marked as done by clicking "Delete".

You can filter the tasks so it only shows the active ones by clicking "Show Active Tasks Only".

You can bring back the tasks marked as done by clicking "Show All Tasks".

## Running the Tests

You can test the code by opening Cypress. Simply type "node_modules/.bin/cypress open"

You'll have four tests that you can click on. "end_to_end_spec.js" tests the application from start to finish. "unit_spec1" and "unit_spec2" test two individual parts of the application. "integration_spec" tests the two unit tests together to make sure that they can be used together and don't conflict.