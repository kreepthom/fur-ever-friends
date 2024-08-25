import styled from 'styled-components'

interface TextFieldWrapperProps {
  $iconPosition: 'left' | 'right';
}

export const TextFieldWrapper = styled.div<TextFieldWrapperProps>`
  display: flex;
  flex-direction: ${({ $iconPosition }) => $iconPosition === 'right' ? 'row-reverse' : 'row'};
  justify-content: center;
  align-items: center;
  background: #eaeeee;
  border-radius: .4rem;
  gap: .5rem;
  padding: .3rem .6rem;
  color: #929597;
`
  
export const TextFieldStyled = styled.input`
  color: #3c3c3c;
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-weight: 500;
  
  &::placeholder {
    color: #929597;
  }
`


