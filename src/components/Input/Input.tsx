import { InputContainer, InputElement, Label } from "./styles";
import { InputProps } from './types'

function Input({ name, type = 'text', placeholder, label, id, value, onChange }: InputProps) {
  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;