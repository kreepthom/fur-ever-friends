import styled from "styled-components";

type Size = 'small' | 'medium' | 'large';

const sizeStyles = {
  small: '5rem',
  medium: '10rem',
  large: '18rem',
};

export const ImageStyled = styled.img<{ $size: Size }>`
  object-fit: cover;
  border-radius: 1.5rem;
  width: ${({ $size }) => sizeStyles[$size]};
  aspect-ratio: 1/1.1;
`