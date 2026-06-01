import Logo from "./Logo";
import  cardImage from "../../assets/images/card.jpg";
import AuthCard from "../common/AuthCard";
import bgShape from "../../assets/images/bg-shape.png";
const LeftAuthPanel = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative h-screen  overflow-hidden rounded-2xl">
 
        <img
        src={bgShape}
        alt="Background"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />


            <div
        className="
          absolute
          inset-0
         bg-[linear-gradient(to_bottom,#010860_0%,#002283_20%,#734AA3_40%,#E7959C_60%,#E4A182_80%,#BF3613_100%)]
          opacity-40
        "
      />


      <div
        className="
          relative
          z-10
          flex
          flex-col
          w-full
          p-4
        "
      >
       
       <div className="text-start">
            <Logo />
       </div>
    

   
        <div
          className="
            flex-1
            flex
            items-center
            justify-center
          "
        >
          <AuthCard
            image={cardImage}
            
          />

        </div>


      </div>
  

    </div>
  );
};

export default LeftAuthPanel;