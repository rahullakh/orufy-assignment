const Field = ({ label, type = "text" }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        className="w-full border border-gray-400 rounded-lg px-3 py-2 outline-none focus:border-[#4050FF]"
      />
    </div>
  );
};
export default Field;