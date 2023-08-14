/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "../../utils/Button";

function Card({ imagen }) {
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
        <h2 className="text-4xl">Title</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>

        <div className="pt-5 pb-5 flex gap-5">
          <Button
            name={"View Project"}
            css={
              "cursor-pointer text-base lg:text-lg px-7 md:px-5 py-1 md:py-2 hover:shadow-md shadow-xl rounded-md bg-gradient-to-br from-yellow-300 via-pink-100 to-yellow-300"
            }
          />
          <Button
            name={"Git hab"}
            css={
              "cursor-pointer text-base lg:text-lg px-7 md:px-8 py-2 md:py-1 hover:shadow-md shadow-xl rounded-md bg-gradient-to-br from-orange-300 via-pink-100 to-orange-400"
            }
          />
        </div>
      </div>
    </animated.div>
  );
}

export default Card;
