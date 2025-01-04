# Changelog

## 1.1.0

### Minor Changes

- 2f0daa6: Version Update

## 1.0.0

### Major Changes

- 096d179: react-confirm
  1.0.0 (2025-01-03)
  Features

  Initial release of react-confirm package
  TypeScript support with full type definitions and generics
  Core confirmation dialog component with customizable styling
  Imperative API for showing confirmations (confirm, prompt, alert)
  Hooks for managing confirmation state (useConfirm, useConfirmState)
  Context provider for global configuration
  Built-in themes and styling system
  Accessibility support with ARIA attributes and keyboard navigation
  Support for custom confirmation templates
  Promise-based API for handling confirmations

  Components

  ConfirmProvider - Context provider for global settings
  ConfirmDialog - Base dialog component
  ConfirmButton - Button component with built-in confirmation
  ConfirmPrompt - Text input confirmation component

  Hooks

  useConfirm - Hook for showing confirmations
  useConfirmState - Hook for managing confirmation state
  useConfirmContext - Hook for accessing global configuration

  Types

  Full TypeScript definitions for all components and hooks
  Generic types for custom confirmation data
  Themed styling type definitions
  Event handler type definitions

  Documentation

  Comprehensive README with getting started guide
  API documentation for all exports
  Usage examples and code snippets
  TypeScript usage guide
  Theming documentation
  Accessibility guidelines

  Dependencies

  React 18.0.0 or higher
  TypeScript 4.5.0 or higher
  No other external runtime dependencies

  Breaking Changes

  None (initial release)

  License
  MIT

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-02-24

### Added

- Initial release
- Confirmation dialog component with customizable options
- Support for async operations with loading states
- Error handling and success states
- TypeScript support
- Comprehensive test suite
- Documentation
