import Carousel from "../components/carousel/Carousel3D";

function Project() {
  return (
    <div id="project" className="flex flex-col justify-center mb-20">
      <div className="">
        <h2 className="text-5xl pb-4 text-center font-Rampart font-semibold text-gray-600">
          My Projects
        </h2>
        <p className="text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="md:mt-36">
        <Carousel />
      </div>
    </div>
  );
}

export default Project;
