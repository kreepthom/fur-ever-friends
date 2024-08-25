import { InputHTMLAttributes, ReactNode } from "react"
import { TextFielStyled } from "./TextFieldStyled"

interface TextFieldAtmProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
}

export const TextFieldAtm = (props: TextFieldAtmProps) => {
  return (
    <>
      <TextFielStyled {...props}/>
    </>
  )
}
