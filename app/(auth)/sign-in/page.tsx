"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignIn = () => {
  return (
    <div>
      <AuthForm
        schema={SignInSchema}
        defaultValues={{ email: "", password: "" }}
        formType="SIGN_IN"
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default SignIn;
