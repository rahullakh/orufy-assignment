import { useState } from "react";
import AuthLayout from "../layout/AuthLayout";
import Login from "../../pages/loginpage/Login";
import EntereCredential from "../../components/auth/EntereCredential";
import EnterOTP from "../../components/auth/EnterOTP";
import OTPSucces from "../../components/auth/OTPSucces";
import Error from "../../components/auth/Error";
const AuthFlow = () => {
  const [step, setStep] = useState(1);
     console.log("Current Step:", step);
  return (
    <AuthLayout>
      {step === 1 && (
        <Login
          next={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <EntereCredential
          next={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <EnterOTP
          success={() => setStep(4)}
          error={() => setStep(5)}
        />
      )}

      {step === 4 && (
        <OTPSucces />
      )}

      {step === 5 && (
        <Error
          retry={() => setStep(3)}
        />
      )}
    </AuthLayout>
  );
};

export default AuthFlow;