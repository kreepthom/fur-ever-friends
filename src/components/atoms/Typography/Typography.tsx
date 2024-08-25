// @Packages
import { createElement, PropsWithChildren } from 'react'
import styled from 'styled-components'

// @Scripts
import { variantStyles } from './variant-styles';

type Variant = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface TypographyProps extends PropsWithChildren {
  $bold?: boolean;
  $colorLighter?: boolean;
  $transform?: 'uppercase' | 'lowercase' | 'capitalize';
  variant: Variant;
}

export const Typography = styled(({ variant, children, ...props }: TypographyProps) =>
  createElement(variant, props, children),
)`
  font-weight: ${({ $bold }) => $bold ? 700 : 500};
  opacity: ${({ $colorLighter }) => $colorLighter ? 0.3 : 1};
  text-transform: ${({ $transform }) => $transform || 'none'};
  ${({ variant }) => variantStyles[variant]}
`;