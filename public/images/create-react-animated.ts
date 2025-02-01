import { ComponentType } from 'react'; // Import outside the module

declare module 'react-animated-numbers' {
  interface Config {
    mass?: number;
    tension?: number;
    friction?: number;
  }

  interface AnimatedNumbersProps {
    animateToNumber: number;
    locale?: string;
    configs?: (num: number, index: number) => Config;
    className?: string;
    includeComma?: boolean; // Optional, if relevant to your use case
  }

  // Instead of `export default`, declare the component
  const AnimatedNumbers: ComponentType<AnimatedNumbersProps>;
  // This is how you declare the module, without using `export` or `export default`.
  // The external code that imports this module will use the declared types.
}
