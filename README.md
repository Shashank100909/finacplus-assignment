# Playwright E2E Testing - SauceDemo

## Setup Instructions
Follow these steps to set up and run the Playwright automation tests locally.

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

### Clone the Repository
```sh
git clone <your-repo-url>
cd <your-repo-folder>
```

### Install Dependencies
```sh
npm install
```

### Install Playwright Browsers
```sh
npx playwright install
```

### Run Tests
```sh
npx playwright test
```

### Folder Structure
```
📂 your-repo-folder
├── 📂 pageObjects          # Page Object Model (POM) files
├── 📂 tests                # Test scripts
├── 📂 reports              # Test reports (if enabled)
├── 📄 playwright.config.js  # Playwright configuration
└── 📄 README.md            # Setup guide
```

### Running Specific Test Files
To run a single test file:
```sh
npx playwright test tests/cartTest.spec.js
```

### View Test Reports
After running tests, generate an HTML report:
```sh
npx playwright show-report
```

### Clean Up Old Reports
```sh
npx playwright test --clean
```

### Stop Tests on First Failure
```sh
npx playwright test --max-failures=1
```

### Troubleshooting
- **Browser not launching?** Run `npx playwright install` again.
- **Tests failing randomly?** Add `await page.waitForTimeout(1000);` before critical steps.
- **Need help?** Check the [Playwright Docs](https://playwright.dev/).

---
🚀 **Now you're all set! Happy testing!** 🎭
