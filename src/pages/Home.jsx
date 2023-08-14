import Headers from "../components/Headers";
import Button from "../utils/Button";
import SidePhoto from "../assets/favpng_web-development-responsive-web-design.png";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contacts from "./Contacts";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-gradient-to-br from-yellow-200 via-pink-100 to-yellow-100">
      {/* header components */}
      <Headers />

      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between max-lg:flex-wrap-reverse items-center 2xl:mt-10 xl:mt-5">
          <div className="w-full">
            <p className="text-sm text-gray-500 font-Rampart font-semibold md:text-sm lg:text-xl">
              Welcome To My PorFollo
            </p>
            <h2 className="font-Rampart font-bold text-5xl xl:text-7xl">
              Hi, I am Steven <br />{" "}
              <span className="text-2xl md:text-4xl xl:text-5xl">
                web-developer
              </span>
            </h2>
            <p className="md:text-lg lg:text-xl pt-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam quod veniam quis! Aut ullam porro repudiandae dolorem
              laboriosam facere pariatur. Corporis consequuntur tenetur
              veritatis numquam cupiditate error labore, ea architecto!
            </p>

            <div className="flex gap-10 mt-16">
              <Button
                name={"Hire Me"}
                css={
                  "text-base md:text-xl lg:text-2xl px-7 md:px-12 py-2 md:py-4 hover:shadow-md shadow-xl rounded-md bg-gradient-to-br from-yellow-300 via-pink-100 to-yellow-300"
                }
                link="#contact"
              />

              <Button
                name={"My Project"}
                css={
                  "text-base md:text-xl lg:text-2xl px-7 md:px-10 py-2 md:py-4 hover:shadow-md shadow-xl rounded-md border"
                }
                link="#project"
              />
            </div>
          </div>
          <div className="">
            <img
              className="md:pl-20 w-[50rem] md:w-[60rem] lg:w-[70rem] xl:w-[90rem]"
              src={SidePhoto}
              alt=""
            />
          </div>
        </div>

        <AboutMe />
        <Project />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
