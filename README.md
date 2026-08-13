# Playwright Tests

This repository contains automated UI tests written with Playwright and TypeScript.

## Prerequisites

Before running the tests, make sure Node.js and npm are installed on your machine.

## Installation

Install the project dependencies:

```
npm install
```

Install the Playwright browsers:

```
npx playwright install
```

## Test Structure

The tests are located in the `tests` directory.

Unit 10 contains an automated test for the login functionality of the Practice Software Testing application.

The test verifies that a user can successfully log in with valid credentials and that:

- the user is redirected to the My Account page;
- the "My account" page title is displayed;
- the username "Jane Doe" is displayed in the navigation bar.

## Running Tests

To run the Unit 10 test:

```
npm run test:unit10
```

To run all Playwright tests:

```
npx playwright test
```

## Running Tests in UI Mode

To open Playwright UI Mode:

```
npx playwright test --ui
```

UI Mode allows you to run tests interactively and inspect each test step.

## Test Report

After running the tests, you can open the Playwright HTML report with:

```
npx playwright show-report
```