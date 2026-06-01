import { useState } from "react";
import Button from "../common/Button";
import OTPResend from "../common/OTPResend";
import OTPInput from "../common/OTPInput";


const EnterOTP = ({ success, error }) => {
  const [otp, setOtp] = useState("");
  
  const handleVerify = () => {
    console.log("OTP:", otp);

    if (otp === "123456") {
      success();
    
    } else {
      error();
    }
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold mb-6">
       Login to your Product Account
      </h1>

      <OTPInput
        length={6}
        onChange={setOtp}
      />

      <Button onClick={handleVerify}>
       Enter your OTP
      </Button>

      <OTPResend />
    </div>
  );
};

export default EnterOTP;