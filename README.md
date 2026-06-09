# Playwright Automation Framework

* VS Code

## Installation

Clone the repository:

```bash
git clone https://github.com/omkarmore1/playwright-automation.git
```

Navigate to the project:

```bash
cd playwright-automation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Playwright Commands

## Run all tests

```bash
npx playwright test
```

## Run a specific test file

```bash
npx playwright test tests/monitoring.spec.ts
```

## Run tests in headed mode

```bash
npx playwright test --headed
```

## Run tests in a specific browser

```bash
npx playwright test --project=chromium
```

```bash
npx playwright test --project=firefox
```

```bash
npx playwright test --project=webkit
```

## Run tests in debug mode

```bash
npx playwright test --debug
```

## Open Playwright UI Mode

```bash
npx playwright test --ui
```

## Generate and open report

```bash
npx playwright show-report
```

## Record a new test

```bash
npx playwright codegen
```

---

# Git Commands

## Check repository status

```bash
git status
```

## Add all changes

```bash
git add .
```

## Commit changes

```bash
git commit -m "Your commit message"
```

## Push changes to GitHub

```bash
git push
```

## Pull latest changes

```bash
git pull
```

## View commit history

```bash
git log --oneline
```

## View configured remote repository

```bash
git remote -v
```

## Create a new branch

```bash
git checkout -b feature/new-feature
```

## Switch branch

```bash
git checkout main
```

## Merge branch into main

```bash
git merge feature/new-feature
```

---

