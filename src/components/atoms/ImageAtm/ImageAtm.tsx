import { ImageStyled } from "./StyledImage";

type Size = 'small' | 'medium' | 'large';

interface ImageAtmProps {
  src: string;
  alt: string;
  size: Size;
}

export const ImageAtm = ({ src, alt, size }: ImageAtmProps) => {
  return <ImageStyled src={src} alt={alt} $size={size} />;
}