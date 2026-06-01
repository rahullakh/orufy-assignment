import { useRef, useState } from "react";

const OTPInput = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);

    setOtp(newOtp);

    onChange?.(newOtp.join(""));

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex gap-3 justify-center mb-6">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) =>
            handleChange(e.target.value, index)
          }
          className="
            w-12 h-12
            border border-gray-300
            rounded-lg
            text-center
            text-xl font-semibold
          "
        />
      ))}
    </div>
  );
};

export default OTPInput;