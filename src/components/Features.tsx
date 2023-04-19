import React from "react";

function Features() {
  return (
    <div className="w-full flex flex justify-center">
      <div className="tabanddesk:w-10/12 mobile:w-full desktop:max-w-custom1300 flex flex-col items-center mobile:mx-5">
        <h1 className="mt-12 text-primary-color text-2xl font-semibold font-gola">
          WHY GO WITH US
        </h1>
        <section className="mt-5">
          <div className="tabanddesk:py-5 relative">
            <div className="feature1blob"></div>
            <div className="flex flex-col items-center desktop:justify-center tablet:justify-start md:flex-row">
              <div className="mb-12 flex justify-center md:w-1/2">
                <img src="./newfeature1.svg" alt="" />
              </div>
              <div className="tabanddesk:text-left md:text-left md:w-1/2 md:ml-20">
                <h4 className="font-bold tabanddesk:text-size32 mobile:text-xl font-gola text-about-text-color mb-4">
                  Get the best loan offer you can
                </h4>
                <p className="font-gola text-base tabanddesk:leading-8	mobile:leading-7">
                  We allow the banks to bid, thus allowing you to get the
                  competitive interest rates. As multiple banks will be
                  accessing your profile, it creates a competitive environment
                  among banks in providing you the better rates, better
                  repayment options and other You can then compare and evaluate
                  different offers from various banks and choose the one which
                  you are comfortable with
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="feature2blob"></div>
          <section>
            <div className="py-5">
              <div className="flex flex-col-reverse	items-center justify-between md:flex-row">
                <div className="tabanddesk:text-left md:text-left md:w-1/2">
                  <h4 className="font-bold tabanddesk:text-size32 mobile:text-xl font-gola text-about-text-color mb-4">
                    Reach all the best banks with one application
                  </h4>
                  <p className="font-gola text-base tabanddesk:leading-8 mobile:leading-7">
                    you can save time and energy while still getting access to
                    the best rates and loan terms available. You can compare
                    offers from multiple lenders and choose the one that works
                    best for you. So why spend weeks and months filling out
                    multiple applications (talking to multiple banks) when you
                    can reach all the best banks with just one application?
                  </p>
                </div>
                <div className="mb-12 flex desktop:justify-center tablet:justify-end md:w-1/2">
                  <img src="./newfeature2.svg" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="relative py-5">
            <div className="feature1blob"></div>
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="mb-12 flex desktop:justify-center tablet:justify-start md:w-1/2">
                  <img src="./newfeature3.svg" alt="" />
                </div>
                <div className="tabanddesk:text-left md:text-left md:w-1/2 md:ml-20">
                  <h4 className="font-bold tabanddesk:text-size32 mobile:text-xl font-gola text-about-text-color mb-4">
                    Quick turn around times
                  </h4>
                  <p className="font-gola text-base leading-8	">
                    Time is of the essence. All our partner banks try their best
                    in offering you accelerated processing for loan
                    disbursement. By providing complete and accurate information
                    on your form, you increase your chances of being approved
                    for a loan and receiving the funds quickly We provide you an
                    advisor who support you throughout the entire loan process.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="py-5">
              <div className="flex flex-col-reverse	items-center justify-between md:flex-row">
                <div className="tabanddesk:text-left md:text-left md:w-1/2">
                  <h4 className="font-bold tabanddesk:text-size32 mobile:text-xl font-gola text-about-text-color mb-4">
                  Strong Group of Advisors
                  </h4>
                  <p className="font-gola text-base tabanddesk:leading-8 mobile:leading-7">
                  Lorem ipsum Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Exercitation veniam consequat sunt nostrud amet.Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="mb-12 flex desktop:justify-center tablet:justify-end md:w-1/2">
                  <img src="./newfeature4.svg" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="relative py-5">
            <div className="feature1blob"></div>
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div className="mb-12 flex desktop:justify-center tablet:justify-start md:w-1/2">
                  <img src="./newfeature5.svg" alt="" />
                </div>
                <div className="tabanddesk:text-left md:text-left md:w-1/2 md:ml-20">
                  <h4 className="font-bold tabanddesk:text-size32 mobile:text-xl font-gola text-about-text-color mb-4">
                  Seamless Profile
                  </h4>
                  <p className="font-gola text-base leading-8	">
                  Lorem ipsum Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Exercitation veniam consequat sunt nostrud amet.Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="w-full grid tabanddesk:grid-cols-3 my-10 gap-20">
          <div className="flex flex-col w-full items-center">
            <div className="desktop:h-56 tablet:h-44 w-4/5">
              <img
                className="bg-cover"
                src="./feature1.png"
                alt="Feature 1"
              />
            </div>
            <div className="text-start">
              <h1 className="font-gola desktop:text-size28 tablet:text-2xl mobile:text-2xl mobile:mt-5 desktop:leading-9 font-semibold">
                Get the best loan offer you can
              </h1>
              <h1 className="font-gola font-light text-base mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                cupiditate sunt
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="desktop:h-56 tablet:h-44 w-4/5">
              <img
                className="bg-cover"
                src="./feature2.png"
                alt="Feature 2"
              />
            </div>
            <div className="text-start">
              <h1 className="font-gola desktop:text-size28 tablet:text-2xl mobile:text-2xl mobile:mt-5 desktop:leading-9 font-semibold">
                Reach all the best banks with one application
              </h1>
              <h1 className="font-gola font-light text-base mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                cupiditate sunt
              </h1>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <div
              className="desktop:h-56 tablet:h-44 w-3/5"
            >
              <img className="bg-cover" src="./feature3.png" alt="Feature 3" />
            </div>
            <div className="text-start">
              <h1 className="font-gola desktop:text-size28 tablet:text-2xl mobile:text-2xl mobile:mt-5 desktop:leading-9 font-semibold">
                Quick turn around times
              </h1>
              <h1 className="font-gola font-light text-base mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                corrupti impedit ducimus.
              </h1>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Features;
