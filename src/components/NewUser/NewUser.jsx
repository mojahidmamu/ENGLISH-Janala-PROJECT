import { useState } from "react";

const NewUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-2 text-5xl font-bold">Welcome ! </h1> <br />
          <h4 className="font-bold mb-3">You are new user in this page...</h4>
          <p className="mb-5">you are in a job & internship placeholder</p>
          {/* Button */}
          <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
            Reception
          </button>
          {/* Modal */}
          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-red-600 p-6 rounded-lg shadow-lg w-96">
                <p className="mb-4 text-green-500">
                  Are you happy ? Tell your friend about this.
                </p>
                <h2 className="text-5xl font-bold mb-4 ">Hurrrah ! </h2>
                <button
                  className="btn btn-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Satisfied & close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewUser;
