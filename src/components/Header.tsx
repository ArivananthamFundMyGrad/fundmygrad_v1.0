import React from "react";

function Header() {
  return (
    <div className="bg-light-color w-full flex flex-col items-center">
      <div className="w-11/12 flex justify-between mt-5">
        <img width={180} src="./logo.svg" alt="fundmygrad logo" />
        <div className="mobile:hidden flex">
          <button
            type="button"
            className="h-10 mr-5 font-gola text-button-text hover:text-black border border-border-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            <img width={20} src="./whatsapp.png" alt="Whatsapp Image" />
            &nbsp; Need assitance?
          </button>
          <button
            type="button"
            className="h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          >
            Student Login
          </button>
        </div>
        {/* <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <button className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div> */}
        {/* Mobile Menu */}
        {/* <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-start items-start w-full h-screen bg-light-color text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul className="pt-24 flex flex-col ml-10">
            <button
              type="button"
              className="h-10 mr-5 font-gola text-button-text hover:text-black border border-border-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              <img width={20} src="./whatsapp.png" alt="Whatsapp Image" />
              &nbsp; Need assitance?
            </button>
            <button
              type="button"
              className="mt-5 h-10 font-gola	text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              Student Login
            </button>
          </ul>
        </div> */}
      </div>
      <div className="tabanddesk:w-11/12 mobile:w-width95 flex justify-between mt-5">
        <div className=" mobile:my-10 tabanddesk:w-1/2 mobile:w-full flex mobile:flex-col items-center">
          <div className="tabanddesk:hidden w-full flex justify-center mb-16">
            <img width={"80%"} src="./header.svg" alt="Header Image" />
          </div>
          <h1 className="tabanddesk:pr-10 tablet:text-4xl mobile:text-4xl tablet:leading-relaxed desktop:lineheight67 desktop:text-size56 font-gola font-bold">
            We make finding a bank loan to fund your study overseas easier
          </h1>
          <div className="tabanddesk:hidden mt-10 w-full flex item-start justify-start">
            <button
              type="button"
              className="h-10 mr-5 font-gola text-button-text hover:text-black border border-border-color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              <img width={20} src="./whatsapp.png" alt="Whatsapp Image" />
              &nbsp; Need assitance?
            </button>
            <button
              type="button"
              className="h-10 font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
            >
              Student Login
            </button>
          </div>
        </div>
        <div className="mobile:hidden w-1/2 py-16">
          <img
            className="ml-20"
            width={"80%"}
            src="./header.svg"
            alt="Header Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
