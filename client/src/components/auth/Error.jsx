import Button from "../common/Button";

const Error = ({ retry }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold text-red-500">
        Invalid OTP
      </h1>

      <p className="mt-3 text-gray-500 mb-6">
        Please try again.
      </p>

      <Button onClick={retry}>
        Try Again
      </Button>
    </div>
  );
};

export default Error;