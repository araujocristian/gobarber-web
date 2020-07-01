import React from 'react';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = (data: object): void => {
    console.log(data);
  };
  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="Logo GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
