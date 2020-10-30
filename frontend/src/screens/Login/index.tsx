import React, { useState } from 'react';

import Input from '../../components/Input';

import {
  ContainerLogin, ContainerForm, Form, Button,
} from './styles';

interface UserCredentials {
  email: string;
  password: string;
}

function Login() {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({ email: '', password: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  return (
    <ContainerLogin>
      <ContainerForm>
        <Form>
          <Input
            name="email"
            htmlFor="email"
            type="email"
            label="Email"
            value={userCredentials.email}
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            htmlFor="password"
            type="password"
            label="Password"
            value={userCredentials.password}
            onChange={handleChange}
            required
          />
          <Button type="submit"><span>Enter</span></Button>
        </Form>
      </ContainerForm>
    </ContainerLogin>
  );
}

export default Login;
