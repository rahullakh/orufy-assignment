import { Link } from "react-router-dom";

const AuthRedirect = ({
  text,
  linkText,
  to,
}) => {
  return (
   <div
  className="
    bg-white
    border border-[#D4D4D4]
    rounded-xl
    px-18
    py-4
    text-center
  "
>
  <p className="text-sm text-[#98A2B3]">
    {text}
  </p>

  <Link
    to={to}
    className="
      mt-1
      inline-block
      font-semibold
      text-[#010860]
      hover:underline
    "
  >
    {linkText}
  </Link>
</div>
  );
};

export default AuthRedirect;