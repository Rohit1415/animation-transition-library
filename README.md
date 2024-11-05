# Animation Transition Library

A simple and customizable animation and transition library built with TypeScript and React. This library provides easy-to-use components for common animations such as fade, slide, zoom, and rotate, allowing developers to enhance their user interfaces with minimal effort.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Features

- Lightweight and easy to use
- Built with TypeScript for type safety
- Supports common animations: fade, slide, zoom, and rotate
- Easily customizable animation durations and styles

## Installation

To install the Animation Transition Library, you can use npm or yarn:

```bash
npm install animation-transition-library
```

or

```bash
yarn add animation-transition-library
```

Make sure you have `react`, `react-dom`, and `framer-motion` installed as well:

```bash
npm install react react-dom framer-motion
```

If you're using TypeScript, you should also install the type definitions:

```bash
npm install @types/react @types/react-dom --save-dev
```

## Usage

After installing the library, you can import and use the animation components in your React application.

### Example

```tsx
import React from 'react';
import { FadeIn, SlideIn, ZoomIn, Rotate } from 'animation-transition-library';

const App = () => {
    return (
        <div>
            <FadeIn duration={1000}>
                <h1>Hello, World!</h1>
            </FadeIn>
            <SlideIn duration={500}>
                <p>This slides in from the bottom.</p>
            </SlideIn>
            <ZoomIn duration={700}>
                <button>Click Me!</button>
            </ZoomIn>
            <Rotate duration={1000} degrees={180}>
                <div style={{ width: 100, height: 100, background: 'lightblue' }}>Rotate Me!</div>
            </Rotate>
        </div>
    );
};

export default App;
```

## Components

### FadeIn

```tsx
<FadeIn duration={500}>
    <YourComponent />
</FadeIn>
```

- **Props**:
  - `duration`: Duration of the animation in milliseconds (default: 500).

### FadeOut

```tsx
<FadeOut duration={500}>
    <YourComponent />
</FadeOut>
```

- **Props**:
  - `duration`: Duration of the animation in milliseconds (default: 500).

### SlideIn

```tsx
<SlideIn duration={500}>
    <YourComponent />
</SlideIn>
```

- **Props**:
  - `duration`: Duration of the animation in milliseconds (default: 500).

### SlideOut

```tsx
<SlideOut duration={500}>
    <YourComponent />
</SlideOut>
```

- **Props**:
  - `duration`: Duration of the animation in milliseconds (default: 500).

### ZoomIn

```tsx
<ZoomIn duration={500}>
    <YourComponent />
</ZoomIn>
```

- **Props**:
  - `duration`: Duration of the animation in milliseconds (default: 500).

### ZoomOut

```tsx
<ZoomOut duration={500}>
    <YourComponent />
</ZoomOut>
```

- **Props**:
  - `duration`: Duration of the animation in milliseconds (default: 500).

### Rotate

```tsx
<Rotate duration={500} degrees={360}>
    <YourComponent />
</Rotate>
```

- **Props**:
  - `duration`: Duration of the animation in milliseconds (default: 500).
  - `degrees`: Degrees to rotate (default: 360).

## API Reference

Each component accepts the following props:

- `duration`: Specifies the duration of the animation.
- `children`: The content to animate.
- `onAnimationEnd`: Optional callback function to be called after the animation completes.

## Contributing

Contributions are welcome! If you'd like to contribute to this library, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Sections Explained

- **Features**: This section highlights the core functionalities of the library, such as its lightweight design, ease of use, TypeScript support, and the variety of animations it offers (fade, slide, zoom, and rotate). It helps users quickly understand the benefits of using the library.

- **Installation**: This section provides step-by-step instructions for installing the library and its dependencies, ensuring that users can get started without any hassle. It includes commands for using both npm and yarn, along with additional instructions for installing `react`, `react-dom`, `framer-motion`, and TypeScript type definitions.

- **Usage**: In this section, users will find example code snippets that demonstrate how to integrate and use the library within a React application. This practical guide helps users visualize how the library works in real-world scenarios.

- **Components**: This section details each animation component included in the library, providing usage examples and descriptions of the available props for each component. This ensures that users know how to implement each animation and customize its behavior according to their needs.

- **API Reference**: Summarizing the available props for each component, this section serves as a quick reference for developers. It clarifies the purpose of each prop and its default values, helping users to effectively utilize the components in their projects.

- **Contributing**: This section outlines the guidelines for contributing to the project, encouraging developers to participate and enhance the library. It includes steps for forking the repository, creating new branches, making changes, and submitting pull requests, fostering a collaborative development environment.

- **License**: This section specifies the licensing for the project, informing users about the legal terms under which the library can be used and modified. It typically links to a LICENSE file for further details, ensuring transparency and compliance with licensing regulations.
