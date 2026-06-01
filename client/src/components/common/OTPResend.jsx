import { Link } from "react-router-dom";

const OTPResend = ({
  text = "Didn't receive OTP?",
  linkText = "Resend in 20s",
  to = "",
}) => {
  return (
    <p className="text-sm text-[#98A2B3] mt-3 text-center">
      {text}{" "}
      <Link
        to={to}
        className="
          font-semibold
          text-[#010860]
          hover:underline
        "
      >
        {linkText}
      </Link>
    </p>
  );
};

export default OTPResend;