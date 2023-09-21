# Custom React Folder Structure CLI

A CLI tool to bootstrap your React projects with custom folder structures and optional packages like Tailwind CSS, TypeScript, Redux, and Vite.

## Table of Contents

- [Summary](#summary)
- [Installation](#installation)
- [Usage](#usage)
- [Optional Packages](#optional-packages)
- [Folder Structures](#folder-structures)
- [Commands Generated](#commands-generated)
- [How It Works](#how-it-works)
- [Contributing](#contributing)

---

## Summary

This CLI tool aims to simplify the process of setting up a new React project by providing options for folder structures and additional packages. It automates the tedious tasks of creating folders, installing packages, and setting up your development environment.

---

## Installation

To install the package, run:

```bash
npm install -g custom-react-folder-structure-cli
```

---

## Usage

After installation, navigate to your workspace and run:

```bash
custom-react-folder-structure-cli init
```

You'll be prompted to answer a series of questions to customize your React project.

---

## Optional Packages

You can choose to install any combination of the following packages:

- **[Tailwind CSS](https://tailwindcss.com/docs/installation)**: A utility-first CSS framework.
- **[TypeScript](https://www.typescriptlang.org/docs/)**: A superset of JavaScript that adds static types.
- **[Redux](https://redux.js.org/introduction/getting-started)**: A state management library.
- **[Vite](https://vitejs.dev/guide/)**: A build tool and development server.

---

## Folder Structures

You can choose from the following folder structures:

- **Default**: No change to the normal React structure.
- **Choice A**: A comprehensive structure suitable for larger projects. Here's a diagram to give you an idea:

  ```vbnet
  src/
  ├── api-client/
  │ ├── live/
  │ ├── mock/
  │ └── models/
  ├── assets/
  ├── components/
  ├── constants/
  ├── http-client/
  ├── localization/
  ├── models/
  ├── primitives/
  ├── shared-hooks/
  ├── store/
  ├── tailwind/
  ├── tests/
  ├── views/
  └── views-public/
  ```

- **Choice B**: This is like Choice A but no subdirectories:

  ```vbnet
  src/
  ├── api-client/
  ├── assets/
  ├── components/
  ├── constants/
  ├── http-client/
  ├── localization/
  ├── models/
  ├── primitives/
  ├── shared-hooks/
  ├── store/
  ├── tailwind/
  ├── tests/
  ├── views/
  └── views-public/
  ```

---

## Commands Generated

Based on the packages you choose, the CLI will run one of the following commands to create your React project:

- **Vite + TypeScript**: ```npx create-vite@latest [project-name] --template react-ts```
- **Vite**: ```npx create-vite@latest [project-name] --template react```
- **TypeScript**: ```npx create-react-app [project-name] --template typescript```
- **Default**: ```npx create-react-app [project-name]```

---

## How It Works

The CLI uses a series of prompts to gather your preferences. Once all options are selected, it runs the appropriate command to create your React project and then proceeds to set up the folder structure and install any additional packages.

---

## Contributing

Feel free to open an issue or submit a pull request if you have any suggestions or find any bugs.

---
