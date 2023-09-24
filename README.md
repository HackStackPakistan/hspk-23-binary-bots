# ConnectPak 🚀

## Project Overview

Welcome to ConnetPK, a platform designed to connect people and enable them to create and attend meetups in Pakistan. This document provides essential information to get started, contribute to, and understand the goals of this project. ConnetPK is built using Angular for the frontend and Firebase for the backend.

## Table of Contents

1. **Getting Started**
    - Prerequisites
    - Installation
2. **Project Structure**
    - Directory Structure
    - Code Organization
3. **Contributing**
    - Code of Conduct
    - How to Contribute
    - Pull Request Process
4. **Documentation**
    - User Guide
5. **Testing**
    - Running Tests
6. **Deployment**
    - Deployment Process
7. **Feedback and Support**
8. **License**

## 1. Getting Started

### Prerequisites

Before you start working on ConnetPK, ensure you have the following:

- **Angular CLI**: Install Angular CLI globally using `npm install -g @angular/cli`.
- **Firebase Account**: Sign up for a Firebase account at [https://firebase.google.com/](https://firebase.google.com/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/connetpk.git
   ```

2. Change directory to the project folder:

   ```bash
   cd connetpk
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up Firebase:
   - Create a Firebase project.
   - Configure Firebase in the project by adding your Firebase configuration to the environment files.

5. Start the development server:

   ```bash
   ng serve
   ```

Now, the ConnetPK frontend should be running locally.

## 2. Project Structure

### Directory Structure

- `/src`: Source code for the Angular application.
- `/src/app`: Angular components, services, and modules.
- `/src/assets`: Static assets like images and CSS.
- `/functions`: Firebase Cloud Functions (backend logic).
- `/public`: Firebase hosting public files.
- `/docs`: Project documentation.

### Code Organization

- Components are organized under `/src/app/components`.
- Firebase functions are in `/functions/index.js`.
- Angular services and modules are structured under `/src/app`.

## 3. Contributing

### Code of Conduct

Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) to maintain a respectful and inclusive environment.

### How to Contribute

1. Fork the repository to your GitHub account.
2. Create a feature branch in your forked repository.
3. Make your changes and commit them with clear messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

### Pull Request Process

Before submitting a pull request, ensure:

- Your code follows the project's coding standards and conventions.
- You've added appropriate tests and documentation.

## 4. Documentation

- User Guide: Detailed instructions on how to use ConnetPK.

## 5. Testing

### Running Tests

To run tests, use the following command:

```bash
ng test
```

## 6. Deployment

### Deployment Process

Follow the deployment guide in the `/docs` folder to deploy ConnetPK to Firebase Hosting.

## 7. Feedback and Support

For feedback, questions, or support, please open an issue on the GitHub repository.

## 8. License

This project is licensed under the [MIT License](LICENSE.md).

---

Thank you for contributing to ConnetPK! Together, we can build a platform that connects people and fosters a sense of community through meetups in Pakistan. Happy coding!