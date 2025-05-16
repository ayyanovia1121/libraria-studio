'use client';
import AuthForm from '@/components/shared/auth-form'
import { signInSchema } from '@/schemas/validation';
import React from 'react'

const SignInPage = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={()=>{}}
    />
  );
}

export default SignInPage