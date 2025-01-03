# Contributing to @razmisoft/react-confirm

Thank you for your interest in contributing to @razmisoft/react-confirm! This document provides guidelines and steps for contributing.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Process](#development-process)
4. [Pull Request Process](#pull-request-process)
5. [Style Guide](#style-guide)
6. [Testing](#testing)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/react-confirm.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Process

1. Make your changes
2. Run tests:
   ```bash
   npm test
   ```
3. Run linter:
   ```bash
   npm run lint
   ```
4. Build the package:
   ```bash
   npm run build
   ```

### Development Guidelines

- Write clear, readable, and maintainable code
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Keep commits focused and atomic
- Write clear commit messages

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the documentation if you're adding or modifying features
3. Add tests for your changes
4. Ensure all tests pass
5. Create a Pull Request with a clear title and description
6. Link any relevant issues

### PR Title Format

Use one of these prefixes:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `test:` for test changes
- `chore:` for maintenance tasks

Example: `feat: add new button variant`

## Style Guide

- Use TypeScript
- Follow ESLint rules
- Use Prettier for formatting
- Follow React best practices
- Write meaningful comments
- Use descriptive variable names

## Testing

- Write tests for all new features
- Maintain existing tests
- Ensure good test coverage
- Test edge cases
- Run the full test suite before submitting PR

### Running Tests

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about contributing

Thank you for contributing!