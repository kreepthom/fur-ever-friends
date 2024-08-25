import { InputHTMLAttributes, ReactNode } from "react"
import { TextFieldStyled } from "./StyledTextField"

interface TextFieldAtmProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
}

export const TextFieldAtm = (props: TextFieldAtmProps) => {
  return (
    <>
      <TextFieldStyled {...props}/>
    </>
  )
}
