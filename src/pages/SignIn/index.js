import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/action';

import logo from '../../assets/logo_f101.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
})

export default function SignIn() {

  const dispatch = useDispatch();

  function handleSubmit({email, password}){
    dispatch(signInRequest({email, password}))
  }
  return (
    <>
    <img src={logo} alt="f10"/>
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="Seu e-mail"/>
      <Input name="password" type="password" placeholder="Senha secreta"/>

      <button type="submit">Acessar</button>
      <Link to="/register">Criar conta</Link>
    </Form>
    </>
  );
}
