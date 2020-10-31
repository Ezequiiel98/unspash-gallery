import React, { useState } from 'react';

import Input from '../../components/Input';

import { validateEmail, validatePassword } from '../../helpers';

import {
  ContainerLogin, ContainerForm, Form, Button,
} from './styles';

interface UserCredentials {
  email: string;
  password: string;
}

interface ErrorMessages {
  email?: string | undefined;
  password?: string | undefined;
}

const Login: React.FC = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({ email: '', password: '' });
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
    setErrorMessages({ [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, email } = userCredentials;
    const { emailIsValid, emailError } = validateEmail(email);
    const { passwordIsValid, passwordError } = validatePassword(password);

    if (emailError) {
      setErrorMessages((errors) => ({ ...errors, email: emailError }));
    }

    if (passwordError) {
      setErrorMessages((errors) => ({ ...errors, password: passwordError }));
    }

    if (passwordIsValid && emailIsValid) {
      console.log('sending...');
    }
  };

  return (
    <ContainerLogin>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            htmlFor="email"
            type="email"
            label="Email"
            errorMessage={errorMessages?.email}
            value={userCredentials.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            htmlFor="password"
            type="password"
            label="Password"
            errorMessage={errorMessages?.password}
            value={userCredentials.password}
            onChange={handleChange}
          />
          <Button type="submit"><span>Enter</span></Button>
        </Form>
      </ContainerForm>
    </ContainerLogin>
  );
};

export default Login;
