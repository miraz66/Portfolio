/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "../../utils/Button";

function Card({ imagen, name }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      //   className={Styles.card}
      className="w-[15rem] md:w-[30rem] bg-orange-200 hover:shadow-xl rounded-xl"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img className="rounded-t-xl" src={imagen} alt="" />
      <div className="p-3">
        <h2 className="text-4xl">{name}</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh volutpat.
        </p>

        <div className="pt-10 pb-5 flex gap-3 md:gap-5 max-md:first-letter max-md:flex-wrap">
          <Button
            name={"View Project"}
            css={
              "w-1/2 p-2 cursor-pointer text-base lg:text-lg max-md:w-full text-center hover:shadow-md shadow-xl rounded-md bg-gradient-to-br from-yellow-300 via-pink-100 to-yellow-300"
            }
          />
          <Button
            name={"Git hab"}
            css={
              "w-1/2 p-2 cursor-pointer text-base lg:text-lg max-md:w-full text-center hover:shadow-md shadow-xl rounded-md bg-gradient-to-br from-orange-300 via-pink-100 to-orange-400"
            }
          />
        </div>
      </div>
    </animated.div>
  );
}

export default Card;
