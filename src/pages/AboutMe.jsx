import Button from "../utils/Button";
import SideImage2 from "../assets/istockphoto-1181533674-612x612.jpg";

function AboutMe() {
  return (
    <div id="about" className="py-32">
      <div className="flex justify-between max-lg:flex-wrap-reverse">
        <div className="py-10">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-600">
            About me
          </h2>
          <p className="pt-10 md:text-xl pb-16 md:pb-24">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi{" "}
            <br />
            repudiandae, sit mollitia ullam natus rem facilis ipsum dignissimos,{" "}
            <br />
            ratione dolores facere dicta, possimus dolorum officiis veritatis{" "}
            <br />
            consequatur fugit iusto optio!
          </p>

          <Button
            name={"Hier me"}
            css={
              "text-lg md:text-xl lg:text-2xl px-10 md:px-12 py-3 md:py-4 hover:shadow-md shadow-xl rounded-md bg-gradient-to-br from-yellow-300 via-pink-100 to-yellow-300"
            }
            link={"#contact"}
          />
        </div>
        <div className="flex justify-end">
          <div className="bg-yellow-400 md:pt-10 rounded-bl-[120px] md:mb-20">
            <img
              className="rounded-bl-[120px] md:-ml-10"
              src={SideImage2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
