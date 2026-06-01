const AuthCard = ({
  image,

  
}) => {
  return (
   <div
  className="
    relative
    bg-white
    rounded-3xl
    max-w-[230px]
    h-[300px]
    w-full
    overflow-hidden
  "
>
  <img
    src={image}
    alt="Product"
    className="
      w-full
      h-full
      object-cover
    "
  />

  <h3
    className="
      absolute
      bottom-5
      left-1/2
      -translate-x-1/2
      text-md
      font-semibold
      text-white
      text-center
       w-full
    "
  >
   Uplist your <br /> product to market
  </h3>
</div>
  );
};

export default AuthCard;