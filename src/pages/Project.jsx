import Carousel from "../components/carousel/Carousel3D";

function Project() {
  return (
    <div id="project" className="flex flex-col justify-center md:mb-20">
      <div>
        <h2 className="text-5xl pb-4 text-center font-Rampart font-semibold text-gray-600">
          My Projects
        </h2>
        <p className="md:text-lg text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="md:mt-36  max-md:pt-20">
        <Carousel />
      </div>
    </div>
  );
}

export default Project;
