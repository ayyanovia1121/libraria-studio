"use client";
import AuthForm from "@/components/shared/auth-form";
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
      onSubmit={() => {}}
    />
  );
};

export default SignUpPage;
