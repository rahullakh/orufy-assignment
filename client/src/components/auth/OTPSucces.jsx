import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
const OTPSucces = () => {
   const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold text-green-600">
        OTP Verified Successfully
      </h1>

      <p className="mb-6">
        Your account has been verified.
      </p>
      <Button onClick={()=> navigate("/home")}>
        Continue
      </Button>
    </div>
  );
};

export default OTPSucces;