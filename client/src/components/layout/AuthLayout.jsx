import LeftAuthPanel from "../common/LeftAuthPanel";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F7F8FA] p-4 lg:p-6">
      <div className="mx-auto max-w-7xl min-h-[calc(100vh-2rem)] flex flex-col lg:flex-row gap-6">

     
        <LeftAuthPanel />

      
        <div className="flex-1">
          <div className="h-full flex justify-center p-6 md:p-10">
            <div className="w-full max-w-md h-full">
              {children}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;