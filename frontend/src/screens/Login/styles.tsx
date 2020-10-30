import styled from '@emotion/styled';

import bgLogin from '../../assets/img/sunrise.jpg';

export const ContainerLogin = styled('div')`
  min-height: 100vh;
  background-image: url(${bgLogin});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  `;

export const ContainerForm = styled('div')`
  min-height: 100vh;
  min-width: 100%;
  padding: 0 10px;
  position: relative;
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  
  @media (min-width: 480px) {
    background-color: rgba(0,0,0,0.3);
    padding: 0 20px;
    min-width: 40%;
    max-width: 100%;
  }
  
  @media (min-width: 768px) {
    padding: 0 30px;
  }

  @supports not ((-webkit-backdrop-filter: blur(8px)) or (backdrop-filter: blur(8px))) {
     background-color: rgba(0,0,0,0.8);
  }
 
  `;

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  position: relative;
  padding: 0 20px;
  `;

export const Button = styled('button')`
  align-self: flex-end;
  margin-top: 15px;
  padding: 12px 30px;
  font-size: 20px;
  color: #fff;
  background-color: transparent;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  
  & > span {
    position: relative;
    color: transparent;
    background-image: linear-gradient(90deg,
      #000 0%,
      #000 50%,
      #fff 50%,
      #fff 100%
    );
    background-repeat: repeat;
    background-size: 200%;
    background-position: 100% 0;
    background-clip: text;
    -webkit-background-clip: text;
    transition: background-position .4s ease-in;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform-origin: 100% 0;
    transform: scale3d(0, 1, 1);
    transition: transform .4s linear .08s;
  }
  
  &:hover {
    cursor: pointer;

    & > span {
      background-position: 0 0;
    }

    &::before {
      transform-origin: 0 0;
      transform: scale3d(1, 1, 1);
    }
  }
}
  `;
