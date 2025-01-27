export interface InputProps {
  name: string,
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number',
  placeholder?: string,
  label?: string,
  id?: string
}