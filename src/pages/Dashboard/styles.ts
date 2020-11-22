import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
   hasError: boolean;
}

export const Title = styled.h1`
   color: #3a3a3a;
   font-size: 48px;
   margin-top: 80px;
   max-width: 450px;
   line-height: 56px;
`;

export const Form = styled.form<FormProps>`
   margin-top: 40px;
   max-width: 700px;

   display: flex;

   input {
      flex: 1;
      height: 70px;
      padding: 0 24px;
      border-radius: 5px 0 0 5px;
      border : 0;
      color: #3a3a3a;
      border: 2px solid #ffff;
      border-right: 0px;

      ${(props) => props.hasError && css`
         border-color: #c53030;
         `}

      &::placeholder {
         color: #A8A8B3;
      }
   }


   button {
      width: 210px;
      height: 70px;
      background: #04d361;
      border-radius: 0 5px 5px 0;
      border: 0;
      color: #ffff;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
         background: ${shade(0.2, '#04d361')}
      }
   }


`;

export const Repositories = styled.div`
   margin-top: 80px;
   max-width: 700px;

   a {
      background: #ffff;
      border-radius: 5px;
      width: 100%;
      padding: 24px;
      text-decoration: none;
      display: block;

      display: flex;
      align-items: center;
      transition: transform 02s;

      & + a {
         margin-top: 16px;
      }

      img {
         width: 64px;
         height: 64px;
         border-radius: 50%;
      }

      div {
         margin: 0 16px;
         flex: 1;

         strong {
            font-size: 20px;
            color : #3D3D4D;
         }

         p {
            font-size: 18px;
            color: #A8A8B3;
            margin-top: 4px;
         }
      }

      svg{
         margin-left: auto;
         color: #CBCBD6;
      }

      &:hover{
         transform: translateX(10px);
      }

   }
`;

export const Error = styled.span`
   display: block;
   color: #c53030;
   margin-top: 8px;
`;
