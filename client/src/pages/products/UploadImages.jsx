const UploadImages = ({ form, setForm, errors }) => {

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setForm((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages],
    }));
  };

  const removeImage = (index) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-2">

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700">
          Upload Product Images
        </label>

        <span className="text-xs text-gray-500">
          Add More Photos
        </span>
      </div>

      <div className="border border-dashed rounded-lg p-3">

        <div className="flex gap-3 flex-wrap items-center">

          {form.images.map((img, index) => (
            <div key={index} className="relative w-16 h-16">

              <img
                src={img.url}
                className="w-full h-full object-cover rounded-md border"
              />

              <button
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"
              >
                ✕
              </button>

            </div>
          ))}

          <label className="w-16 h-16 border-2 border-dashed rounded-md flex items-center justify-center text-xs text-gray-400 cursor-pointer hover:bg-gray-50">
            +
            <input
              type="file"
              multiple
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </label>

        </div>
      </div>

      <p className="text-red-500 text-xs">{errors.images}</p>

    </div>
  );
};

export default UploadImages;