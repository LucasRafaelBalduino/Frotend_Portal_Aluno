import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo_f101.png';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A ua senha é fraca, no minimo 6 caracteres')
    .required('A senha é obrigatória')
})

export default function SignUp() {
  function handleSubmit(data){
    console.tron.log(data);
  }
  return (
    <>
    <img src={logo} alt="f10"/>
    <Form schema={schema} onSubmit={handleSubmit}>
    <Input name="name" placeholder="Nome Completo"/>
      <Input name="email" type="email" placeholder="Seu e-mail"/>
      <Input name="password" type="password" placeholder="Senha secreta"/>

      <button type="submit">Criar Conta</button>
      <Link to="/">Já  tenho conta</Link>
    </Form>
    </>
  );
}
