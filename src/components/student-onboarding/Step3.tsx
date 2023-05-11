import React, { Dispatch } from 'react'

interface step3Props {
    currentStep: string;
    setCurrentStep: Dispatch<React.SetStateAction<string>>;
    option: string;
    setOption: Dispatch<React.SetStateAction<string>>;
  }
  
  function Step3({ option, setCurrentStep, setOption }: step3Props) {
  return (
    <div className="tabanddesk:max-w-custom600 tabanddesk:min-w-custom600 mobile:px-4 w-full">
              <div className="w-full">
                <h1 className="text-2xl font-gola font-semibold text-button-text">
                  Loan Details
                </h1>
                <p className="text-sm font-gola font-normal opacity-50 mt-2">
                  This will help us tailor fundmygrad for you
                </p>
                <div>
                  <p className="font-gola text-sm	font-normal text-subtext opacity-70 mt-5">
                    Loan Requirement (in rupees)
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="₹ 100000"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Pincode
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="608876"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <h1 className="font-gola text-base font-medium mt-3">
                      Collateral:
                    </h1>
                    <div className="flex items-center mt-3">
                      <input
                        checked
                        id="checked-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      />
                      <label
                        htmlFor="checked-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 "
                      >
                        Yes, able to provide a collateral
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Collateral Type
                  </p>
                  <div style={{ height: "48px" }} className="flex mt-1.5">
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option selected>Residential Property</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p className="text-sm	font-normal text-subtext opacity-70 mt-3">
                    Collateral Value
                  </p>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="₹12,00,000"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between	">
                <button
                  onClick={() => setCurrentStep("2")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-primary-color bg-light-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep("4")}
                  type="button"
                  className="h-10 max-w-custom120 mt-6 w-full font-gola text-white bg-primary-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                >
                  Next
                </button>
              </div>
            </div>
  )
}

export default Step3