import { ReactNode } from 'react';

declare module 'react' {
  export = React;
  export as namespace React;
}

declare module 'framer-motion' {
  import { ComponentType, HTMLAttributes } from 'react';
  
  export interface MotionProps extends HTMLAttributes<HTMLElement> {
    initial?: any;
    animate?: any;
    whileHover?: any;
    whileInView?: any;
    viewport?: any;
    transition?: any;
  }

  export const motion: {
    div: ComponentType<MotionProps>;
    h1: ComponentType<MotionProps>;
    h2: ComponentType<MotionProps>;
    p: ComponentType<MotionProps>;
    span: ComponentType<MotionProps>;
    [key: string]: ComponentType<MotionProps>;
  };
}

declare module 'next/image' {
  import { ComponentType, DetailedHTMLProps, ImgHTMLAttributes } from 'react';
  export interface ImageProps extends Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src' | 'alt'> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    priority?: boolean;
  }
  const Image: ComponentType<ImageProps>;
  export default Image;
}

declare module 'next/link' {
  import { ComponentType, AnchorHTMLAttributes } from 'react';
  export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
  }
  const Link: ComponentType<LinkProps>;
  export default Link;
}

declare module 'next/head' {
  import { ComponentType } from 'react';
  const Head: ComponentType<{ children?: React.ReactNode }>;
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