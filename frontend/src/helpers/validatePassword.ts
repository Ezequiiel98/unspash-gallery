interface ResultValidatePassword {
  passwordIsValid: boolean;
  passwordError: string;
}

const validatePassword = (password: string): ResultValidatePassword => {
  const result: ResultValidatePassword = { passwordIsValid: false, passwordError: '' };

  if (password.trim() === '') {
    result.passwordError = 'Password is required';
    return result;
  }

  if (password.trim().length !== password.length) {
    result.passwordError = 'Password cannot have blank spaces';
    return result;
  }

  result.passwordError = '';
  result.passwordIsValid = true;

  return result;
};

export default validatePassword;
