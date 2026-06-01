import { useState } from "react";
import Button from "../common/Button";
import OTPResend from "../common/OTPResend";
import OTPInput from "../common/OTPInput";

const EnterOTP = ({ success, error }) => {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const handleVerify = () => {
    if (!otp || otp.length < 6) {
      setOtpError("Please enter a valid OTP");
      return;
    }

    if (otp === "123456") {
      setOtpError("");
      success();
    } else {
      setOtpError("Invalid OTP");
      error();
    }
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold mb-6">
        Login to your Product Account
      </h1>

      <p className="mb-4 text-sm text-gray-600">
        Demo OTP: <span className="font-semibold">123456</span>
      </p>

      <OTPInput
        length={6}
        onChange={(value) => {
          setOtp(value);

          if (otpError) {
            setOtpError("");
          }
        }}
      />

      {otpError && (
        <p className="text-red-500 text-sm mb-4">
          {otpError}
        </p>
      )}

      <Button onClick={handleVerify}>
        Enter your OTP
      </Button>

      <OTPResend />
    </div>
  );
};

export default EnterOTP;