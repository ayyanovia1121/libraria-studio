"use client";

import { signInWithCredentials } from "@/actions/auth.action";
import AuthForm from "@/components/custom/common/auth-form";
import { signInSchema } from "@/schemas/validation";
import React from "react";

const SignInPage = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={signInWithCredentials}
    />
  );
};

export default SignInPage;
