import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContainerInput = styled('div')`
  padding: 20px 0 10px 0;
`;

const Label = styled('label')`
  display: block;
  margin-bottom: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  `;

const InputStyle = styled('input')`
  display: block;
  min-width: 100%;
  padding: 15px;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 15px;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  transition: background-color .5s ease;
  `;

const ErrorMessage = styled('p')`
  font-size: 18px;
  padding: 5px 10px;
  margin: 8px 0 0 0;
  color: #fff;
  background-color: #f44336;
  border-radius: 10px;
  `;

type InputProps = {
  label: string;
  type: string;
  htmlFor: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string | undefined;
  name?: string | undefined;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label, type, errorMessage, htmlFor, value, name, onChange, required,
}) => (
  <ContainerInput>
    <Label htmlFor={htmlFor}>{label}</Label>
    <InputStyle
      onChange={onChange}
      type={type}
      id={htmlFor}
      name={name}
      value={value}
      required={required}
    />
    { errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
  </ContainerInput>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  errorMessage: undefined,
  name: undefined,
  required: false,
};

export default Input;
