import { ReactNode } from 'react';

declare module 'framer-motion' {
  export interface MotionProps {
    initial?: any;
    animate?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    transition?: any;
    viewport?: any;
    className?: string;
    children?: ReactNode;
  }
  
  export const motion: {
    div: React.FC<MotionProps>;
    [key: string]: React.FC<MotionProps>;
  };
}

declare module 'next/image' {
  const Image: React.FC<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    className?: string;
    priority?: boolean;
  }>;
  export default Image;
}

declare module 'next/link' {
  const Link: React.FC<{
    href: string;
    className?: string;
    target?: string;
    rel?: string;
    children?: ReactNode;
  }>;
  export default Link;
}

declare module 'next/head' {
  const Head: React.FC<{
    children?: ReactNode;
  }>;
  export default Head;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
} 