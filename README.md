# verify.dreamspace.academy

![React](https://img.shields.io/badge/React-18.3.1-blue)

This repository contains the source code for the [**Certificates DreamSpace Academy**](https://verify.dreamspace.academy/) website, built using **ReactJS**. The site allows users to verify certificates issued by DreamSpace Academy.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js** (version 20.11.0 or later)
- **npm** (version 9.5.0 or later)

### Installation

Follow these steps to clone and run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/dreamspace-academy/verify-dsa-certificates.git
   ```

2. Navigate into the project directory:

   ```bash
   cd verify-dsa-certificates
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   This will launch the website on `http://localhost:3000`.

### Deployment

To deploy the site to **GitHub Pages**, run the following command:

```bash
npm run deploy
```

This command will build the app and deploy it to the `gh-pages` branch of your repository.

## Project Structure

- **public/**: Contains the public assets of the project (such as the `index.html` file).
- **src/**: Contains the source code, including React components, styles, and routing logic.
  - **components/**: Reusable UI components.
  - **pages/**: Different pages of the website.
  - **App.js**: Main application component.
