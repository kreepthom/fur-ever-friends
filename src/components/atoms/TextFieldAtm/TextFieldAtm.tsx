import { InputHTMLAttributes, ReactNode } from "react"
import { TextFieldStyled } from "./TextFieldStyled"

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
