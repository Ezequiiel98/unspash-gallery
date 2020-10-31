import React from 'react';
import PropTypes from 'prop-types';

import {
  ContainerInput,
  Label,
  InputStyle,
  ErrorMessage,
} from './styles';

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
