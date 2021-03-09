import React, { useContext } from 'react';
import { Context } from "../Context";
import {UserForm} from "../components/UserForm";
import {RegisterMutation} from "../container/RegisterMutation";
import {LoginMutation} from "../container/LoginMutation";

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context);
   return(
     <>
       <RegisterMutation>
         { (register,  {data, loading, error}) => {
           const onSubmit = ({ email, password}) => {
             const input = { email, password};
             const variables = { input };
             register({variables})
               .then((resp) => {
                 const { data: { signup }} = resp;
                 activateAuth(signup)
               })
           };

           const errorMsg = error && 'El usuario ya esta registrado';

             return <UserForm disabled={loading} error={errorMsg} title='Register' onSubmit={onSubmit} />
           }
         }
       </RegisterMutation>
       <LoginMutation>
         { (login,  {data, loading, error}) => {
           const onSubmit = ({ email, password}) => {
             const input = { email, password};
             const variables = { input };
             login({variables})
               .then((resp) => {
                 const { data: { login }} = resp;
                 activateAuth(login)
               })
           };

           const errorMsg = error && 'Verifique los datos ingresados';

           return <UserForm disabled={loading} error={errorMsg} title='Iniciar sesión ' onSubmit={onSubmit} />
         }
         }
       </LoginMutation>
     </>
   );
};
