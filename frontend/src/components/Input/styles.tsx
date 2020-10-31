import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

export const ContainerInput = styled('div')`
  padding: 20px 0 10px 0;
`;

export const Label = styled('label')`
  display: block;
  margin-bottom: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  `;

export const InputStyle = styled('input')`
  display: block;
  min-width: 100%;
  padding: 15px;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 15px;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  `;

const showError = keyframes`
  from {
    opacity: 0;
    trasform: translateY(-50px);
  }

  to {
    opacity: 1;
    trasform: translateY(0);
  }
`;

export const ErrorMessage = styled('p')`
  font-size: 18px;
  padding: 5px 10px;
  margin: 8px 0 0 0;
  color: #fff;
  background-color: #f44336;
  border-radius: 10px;
  animation-name: ${showError};
  animation-duration: .5s;
  `;
