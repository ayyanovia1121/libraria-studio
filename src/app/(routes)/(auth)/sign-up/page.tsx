"use client";
import { signUp } from "@/actions/auth.action";
import AuthForm from "@/components/custom/common/auth-form";
import { signUpSchema } from "@/schemas/validation";

const SignUpPage = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullName: "",
        universityId: 0,
        universityCard: "",
      }}
      onSubmit={signUp}
    />
  );
};

export default SignUpPage;
