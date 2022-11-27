# Javascript auto test (Playwright) for site https://automation01.sit.mypassglobal.com/

## Installation:
1. Install node js v18.9.0 or higher(
Recommended For Most Users) - https://nodejs.org/en/
2. Install visual studio code
3. Install java jdk v11 setup https://adoptium.net/ (download latest)
Set java home and oracle install on the local hard drive


### In the terminal run this code:
```
git clone https://github.com/AndriiZhydkykh/Cypress-demo-preferredmd.git
```
npm i
```
```
npm init playwright@latest
```

## Tests
### Run this command in a terminal in visual studio code to run the auto tests:

#### To run test in PC or Laptop viewport in debug mode: 

```
npx playwright test --debug
```

#### For run test in PC or Laptop viewport in headless mode:

```
npx playwright test
```
```
#### To generate report:

```
npm run allure-generate
```
#### To open report:
```
npm run allure-open
```
