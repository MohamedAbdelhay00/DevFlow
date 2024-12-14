"use client";
import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <AuthForm
        schema={SignUpSchema}
        defaultValues={{ email: "", password: "", name: "", username: "" }}
        formType="SIGN_UP"
        onSubmit={(data) => Promise.resolve({ success: true, data })}
      />
    </div>
  );
};

export default SignUp;
