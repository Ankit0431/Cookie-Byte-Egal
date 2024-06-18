import * as React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleLoginClick() {
    navigate("/login");
  }
  function handleRegisterClick() {
    navigate("/register");
  }
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex z-10 justify-center items-center self-stretch px-16 py-5 w-full bg-white border-b border-solid backdrop-blur-[15px] border-black border-opacity-40 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center px-px w-full max-w-screen-xl max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1.5 self-stretch py-3 my-auto text-black whitespace-nowrap">
            <img
              src="eagl-logo.png"
              alt="LargerThan Logo"
              className="grow text-2xl font-bold leading-10"
              style={{ height: "45px" }}
            />
          </div>
          <div className="flex gap-5 justify-center self-stretch px-5 py-4 text-lg font-medium text-zinc-600 max-md:flex-wrap">
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </div>
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About us
            </div>
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              What We Do
            </div>
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("media")}
            >
              Media
            </div>
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4">
          <div
            onClick={handleLoginClick}
            className="justify-center self-stretch px-8 py-3 my-auto text-base font-medium text-right text-white whitespace-nowrap bg-blue-800 rounded max-md:px-5"
          >
            Login
          </div>
          <div
            onClick={handleRegisterClick}
            className="justify-center self-stretch px-8 py-3 my-auto text-base font-medium text-right text-white whitespace-nowrap bg-blue-800 rounded max-md:px-5"
          >
            Register
          </div>
          </div>
        </div>
      </div>
      <div  id="home" className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 w-full font-medium min-h-[735px] max-md:px-5 max-md:max-w-full">
  <img
    loading="lazy"
    src="mainpage.png"
    className="object-cover absolute inset-0 z-0 w-full h-full"
    alt="Main Page Background"
  />
  <div className="flex flex-col items-center z-10">
    <div className="text-6xl font-bold text-white leading-[77px] max-w-full max-md:text-4xl max-md:leading-[53px]">
      Make Someone's dream come true
    </div>
    <div className="flex gap-5 justify-center mt-10 text-base max-md:mt-6"> {/* Adjusted mt-10 to mt-6 */}
      <div className="px-8 py-4 text-white bg-blue-800 rounded backdrop-blur-2xl max-md:px-5">
        What we do
      </div>
    </div>
  </div>
</div>


      <div
        id="about"
        className="mt-20 w-full max-w-[1270px] max-md:mt-10 max-md:max-w-full"
      >
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 items-start mt-24 text-base max-md:flex-wrap max-md:mt-10">
              <div className="flex flex-col grow shrink-0 self-end px-5 mt-12 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold text-gray-800 leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                INVESTORS / DONORS
                </div>
                <div className="mt-10 leading-7 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                  <br />
                  <br />
                  ‍Duis cursus, mi quis viverra ornare, eros dolor interdum
                  nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh
                  et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                  risus tristique posuere.
                </div>
                <div className="justify-center self-start px-8 py-4 mt-14 font-medium text-right text-black bg-blue-100 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="services" className="flex justify-center items-center self-stretch px-16 py-20 mt-20 w-full bg-green-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mt-6 mb-4 w-full max-w-screen-xl max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-start pl-20 mt-12 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                  <div className="ml-4 text-5xl font-bold text-gray-800 leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Some services we provide
                  </div>
                  <div className="mt-9 ml-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </div>
                  <div className="flex gap-5 self-center mt-9 max-w-full w-[460px] max-md:flex-wrap">
                    <div className="shrink-0 w-0.5 border-2 border-solid bg-neutral-200 border-neutral-200 h-[441px]" />
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                      <div className="flex gap-5 items-start max-md:flex-wrap">
                        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                          <div className="text-2xl font-bold text-gray-800">
                            Education
                          </div>
                          <div className="mt-4 text-base leading-7 text-zinc-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros.
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 self-start mt-7 text-2xl font-bold text-gray-800">
                        <div className="flex-auto my-auto">Health care</div>
                      </div>
                      <div className="self-end mt-5 text-base leading-7 text-zinc-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </div>
                      <div className="flex gap-5 items-start mt-7 max-md:flex-wrap">
                        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                          <div className="text-2xl font-bold text-gray-800">
                            Livelihood
                          </div>
                          <div className="mt-5 text-base leading-7 text-zinc-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros.
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 items-start mt-7 max-md:flex-wrap">
                        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                          <div className="text-2xl font-bold text-gray-800">
                            Women Empowernment
                          </div>
                          <div className="mt-5 text-base leading-7 text-zinc-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="services.svg"
                className="grow mt-11 w-full aspect-[0.73] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start px-5 mt-28 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=30d4071338e7485e977656a212aa2027&"
          className="border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px]"
        />
        <div className="mt-12 ml-24 text-5xl font-bold text-gray-800 leading-[58px] w-[640px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          We are creating a place where children with special needs can thrive
        </div>
        <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-12 pt-20 pb-12 w-full text-base text-white rounded-3xl bg-blue-700 max-md:px-5 max-md:mt-6">
                <div className="mt-2.5 text-3xl font-bold leading-10">
                  Mission smile 1k: Outdoor charity
                </div>
                <div className="mt-7 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </div>
                <div className="justify-center px-8 py-4 mt-20 font-medium text-right text-gray-800 bg-white rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                  Learn more
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-12 pt-20 pb-12 w-full text-base text-white rounded-3xl bg-blue-700 max-md:px-5 max-md:mt-6">
                <div className="mt-2.5 text-3xl font-bold leading-10">
                  Weekly excursions
                </div>
                <div className="mt-7 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </div>
                <div className="justify-center px-8 py-4 mt-28 font-medium text-right text-gray-800 bg-white rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                  Learn more
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-12 pt-20 pb-12 w-full text-base text-white rounded-3xl bg-blue-700 max-md:px-5 max-md:mt-6">
                <div className="mt-2.5 text-3xl font-bold leading-10">
                  Monthly public awareness
                </div>
                <div className="mt-8 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </div>
                <div className="justify-center px-8 py-4 mt-20 font-medium text-right text-gray-800 bg-white rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-24 w-full max-w-screen-xl min-h-[384px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="volunteer.svg"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-6 mb-3 max-w-full w-[798px]">
          <div className="text-5xl font-bold text-center text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            You can contribute to us by joining us
          </div>
          <div className="flex gap-5 justify-between self-center mt-9 text-base font-medium text-right">
            <div onClick={handleRegisterClick} className="justify-center px-8 py-4 text-black bg-green-100 rounded backdrop-blur-2xl max-md:px-5">
              Join as a volunteer
            </div>
            <div className="justify-center px-8 py-4 text-gray-800 whitespace-nowrap bg-white rounded backdrop-blur-2xl max-md:px-5">
              Donate
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-24 w-full max-w-screen-xl text-4xl font-medium text-gray-800 leading-[56px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div>Our Events</div>
        <div className="shrink-0 my-auto max-w-full h-px border border-solid bg-neutral-200 border-neutral-200 w-[1042px]" />
      </div>
      <div className="mt-16 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 px-11 py-12 mx-auto w-full text-gray-800 bg-green-100 rounded-3xl max-md:flex-wrap max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <div className="flex flex-auto gap-5 items-start">
                <div className="flex flex-col font-medium whitespace-nowrap">
                  <div className="text-5xl leading-[57.6px] max-md:text-4xl">
                    13
                  </div>
                  <div className="mt-4 text-base uppercase tracking-[2px]">
                    apr
                  </div>
                </div>
                <div className="flex flex-col grow shrink-0 mt-1.5 text-3xl font-bold leading-10 basis-0 w-fit">
                  <div className="shrink-0 self-center w-11 h-0.5 bg-gray-800 border-2 border-gray-800 border-solid" />
                  <div className="mt-7">A day with our wonderful children </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/622a48f5953e4efcbd93191a00c17ef1745e80759f04c985d0ec663268135304?apiKey=30d4071338e7485e977656a212aa2027&"
                className="shrink-0 my-auto w-14 aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 items-start px-11 py-12 w-full text-gray-800 bg-green-100 rounded-3xl max-md:flex-wrap max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <div className="flex flex-col font-medium whitespace-nowrap">
                <div className="text-5xl leading-[57.6px] max-md:text-4xl">
                  25
                </div>
                <div className="mt-4 text-base uppercase tracking-[2px]">
                  apr
                </div>
              </div>
              <div className="flex flex-col grow shrink-0 mt-1.5 text-3xl font-bold leading-10 basis-0 w-fit max-md:max-w-full">
                <div className="shrink-0 self-center w-11 h-0.5 bg-gray-800 border-2 border-gray-800 border-solid" />
                <div className="flex gap-5 items-start mt-4 max-md:flex-wrap">
                  <div className="flex-auto mt-3.5">
                    Seminar: Caring for children with autism
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/622a48f5953e4efcbd93191a00c17ef1745e80759f04c985d0ec663268135304?apiKey=30d4071338e7485e977656a212aa2027&"
                    className="shrink-0 w-14 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-gray-800 text-white py-4 mt-10 w-full">
        <div class="container mx-auto text-center">
            <p class="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    </footer>
    </div>
  );
}

export default Home;
