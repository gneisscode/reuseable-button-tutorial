# Reusable Button Component
A reusable and customizable React button component with class variance authority and Tailwind CSS integration.


## Installation

```
npm install class-variance-authority tailwindcss tailwind-merge

```

## Usage

### Importing

```
import Button from '/src/components/Button/Button';

```

### Example

```
<Button style="filled">Click me!</Button>

```

## Props
children: JSX.Element | React.ReactNode - Content of the button.
className: string - Additional class names for styling.
onClick: (event: React.MouseEvent<HTMLButtonElement>) => void - Callback function for click events.


## Variants

The Button component supports different styles using the style prop:

filled: Filled background with white text.
outlined: Outlined button with blue border and text.


## Stories

This component includes Storybook stories for easy development and testing. Use the stories to visualize different variants:

Default: Default button.
Filled: Button with filled style.
Outlined: Button with outlined style.


## Development

```
npm install

```

```
npm run storybook

```

Visit http://localhost:6006 to view and interact with the stories.


