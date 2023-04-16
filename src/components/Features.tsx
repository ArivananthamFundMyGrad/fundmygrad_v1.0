import React from "react";

function Features() {
  return (
    <div className="w-full flex flex justify-center">
      <div className="w-10/12 flex flex-col items-center">
        <h1 className="mt-12 text-primary-color text-2xl font-semibold font-gola">
          WHY GO WITH US
        </h1>
        <section className="mt-5">
          <div className="container py-5 relative">
            <div className="feature1blob"></div>
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-12 flex justify-center md:w-1/2">
                <img src="./feature1.svg" alt="" />
              </div>
              <div className="tabanddesk:text-center md:text-left md:w-1/2 md:ml-20">
                <h4 className="font-bold tabanddesk:text-size32 mobile:text-xl font-gola text-about-text-color mb-4">
                  Get the best loan offer you can
                </h4>
                <p className="font-gola text-base tabanddesk:leading-8	mobile:leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  cum, quaerat enim voluptate natus nesciunt velit magni
                  cupiditate placeat quae onsectetur adipisicing elit
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="relative">
          <div className="feature2blob"></div>
        <section>
          <div className="container py-5">
            <div className="flex flex-col-reverse	items-center justify-between md:flex-row">
            <div className="tabanddesk:text-center md:text-left md:w-1/2 md:ml-20">
                <h4 className="font-bold tabanddesk:text-size32 mobile:text-xl font-gola text-about-text-color mb-4">
                Reach all the best banks with one application
                </h4>
                <p className="font-gola text-base tabanddesk:leading-8	mobile:leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  cum, quaerat enim voluptate natus nesciunt velit magni
                  cupiditate placeat quae onsectetur adipisicing elit
                </p>
              </div>
              <div className="mb-12 flex justify-center md:w-1/2">
                <img src="./feature2.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container py-5">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="mb-12 flex justify-center md:w-1/2">
                <img src="./feature3.svg" alt="" />
              </div>
              <div className="tabanddesk:text-center md:text-left md:w-1/2 md:ml-20">
                <h4 className="font-bold tabanddesk:text-size32 mobile:text-xl font-gola text-about-text-color mb-4">
                Quick turn around times
                </h4>
                <p className="font-gola text-base leading-8	">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  cum, quaerat enim voluptate natus nesciunt velit magni
                  cupiditate placeat quae onsectetur adipisicing elit
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
