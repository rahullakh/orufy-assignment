import { useState } from "react";
import Button from "../common/Button";
import InputField from "../common/InputField";
import AuthFooter from "./AuthFooter";

const EntereCredential = ({ next }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);

    if (!email.trim()) {
      console.log("Email empty");
      return;
    }

    console.log("Going to Step 3");
    next();
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      
  
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Enter Credentials
        </h1>

        <InputField
          label="Email or Phone Number"
          placeholder="Enter email or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          onClick={handleSubmit}
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

export default EntereCredential;