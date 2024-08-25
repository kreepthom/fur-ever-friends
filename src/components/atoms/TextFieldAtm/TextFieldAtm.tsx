import { InputHTMLAttributes, ReactNode } from "react"
import { TextFieldStyled, TextFieldWrapper } from "./StyledTextField"

type IconPosition = 'left' | 'right';

interface TextFieldAtmProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  iconPosition?: IconPosition;
}

export const TextFieldAtm = ({ icon, iconPosition = 'left', ...props }: TextFieldAtmProps) => {
  return (
    <TextFieldWrapper $iconPosition={iconPosition}>
      {icon && icon}
      <TextFieldStyled {...props}/>
    </TextFieldWrapper>
  )
}
