import { Link } from "react-router-dom";

const AuthFooter = () => {
  return (
    <div className="text-center bg-[#ffff] rounded-xl border border-[#D4D4D4] py-4">
      <p className="text-sm text-gray-600">
        Don’t have a Productr Account? <br />
        <Link
          to="/signup"
          className="font-semibold text-[#010860] hover:underline"
        >
          Sign Up Here
        </Link>
      </p>
    </div>
  );
};

export default AuthFooter;