import { useState } from "react";

import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";
import AuthFooter from "../../components/auth/AuthFooter";

const Login = ({ next }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full h-full flex flex-col justify-between">
      
    
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Login to your Product Account
        </h1>

        <InputField
          label="Email or Phone Number"
          placeholder="Enter email or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          onClick={() => {
            console.log("Login Clicked");
            next();
          }}
          className="w-full mt-4"
        >
          Login
        </Button>
      </div>

  
      <div className="mt-8 sm:mt-12">
        <AuthFooter />
      </div>
    </div>
  );
};

export default Login;