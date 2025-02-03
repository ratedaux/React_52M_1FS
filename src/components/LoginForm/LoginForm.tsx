// import { ChangeEvent, useState, FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormContainer, Title, InputsContainer } from "./styles";
import { LoginFormValues } from "./types";
import { ChangeEvent } from "react";

function LoginForm() {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   // console.log(event);
  //   setEmail(event.target.value);
  // };

  // const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const onLogin = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(email);
  //   console.log(password);
  // };

  //минимум 8 символов, специальный символ и хотя бы одна заглавная буква
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  //--- Создание валидационной схемы с помощью Yup
  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Field email is required')
      .email('Field has type email')
      .max(20, 'Max 20 symbols')
      .min(10, 'Min 10 symbols')
      .typeError('Email must be string'),
    // password: Yup.number()
    //   .required('Field password is required')
    //   .typeError('Password must be number')
    //   .test('Check min password length', 'Min 10 symbols', (value) => String(value).length >= 10)
    //   .test('Check max password length', 'Max 20 symbols', (value) => String(value).length <= 20)
    password: Yup.string()
      .required('Required')
      .matches(passwordRegex, 'Password must be at least 8 characters long, include uppercase, lowercase and special character')
  })

  //--- Настройка формы. useFormik, как аргумент принимает объект настройки, для определенной формы
  //При вызове useFormik возвращается объект, в котором храняться значения из полей, ошибки, различные методы для работы с формой
  const formik = useFormik({
    //в объекте 2 обязательных свойства initialValues и onSubmit
    //initialValues - объект, в котором ключjм является name из поля, а значение initialValue
    initialValues: {
      email: '',
      password: ''
    } as LoginFormValues,
    //validationSchema - свойство, в значение которого нужно передать схеиу для валидации
    validationSchema: schema,
    // свойство validateOnChange по умолчанию true, значит валидация будет происходить при каждом изменении в форме
    validateOnChange: false,
    //onSubmit - функция, которая будет вызвана, когда произоёдет событие submit для формы
    onSubmit: (values: LoginFormValues) => {
      console.table(values)
    }
  })

  console.log(formik);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('password', event.target.value)
    formik.validateField('password')
  }


  return (
    // <LoginFormContainer onSubmit={onLogin}>
    //Для выполнения функции, которая прописана в свойстве onSubmit в настройке formik, в атрибут onSubmit
    //для формы передаём formik.handleSubmit
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        {/* <input onChange={(event: ChangeEvent<HTMLInputElement>)=>{console.log(event);
      }}/> */}
        {/* Для контроля полей необходимо передать значения в prop value и onChange
      для value - formik.values.<name>
      для onChange - formik.handleChange */}
        <Input
          name="email"
          label="Email*"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
          // error={formik.errors.email}
        />
        <Input
          name="password"
          label="Password*"
          value={formik.values.password}
          // onChange={formik.handleChange}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          // error={formik.errors.password}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormContainer>
  );
}
export default LoginForm;