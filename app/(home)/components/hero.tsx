import React from "react";

function Hero() {
  return (
    <div className="">
      <div className="flex justify-center items-center ">
        <div className="">
          <p className=" text-center hover:text-green-500 selection:bg-green-500 text-sm mx-5 w-[90%] m-auto lg:w-[60%] text-green-500  selection:text-black text-balance  justify-center lg:mx-auto">
            {" "}
            The sun dipped below the horizon casting a warm, golden glow over
            the tranquil lake. Birds chirped softly in the distance, creating a
            harmonious symphony that complemented the serene setting. A gentle
            breeze rustled the leaves of the towering oak trees, adding a
            soothing whisper to the evening air. As the sky transitioned to a
            deep, twilight blue, stars began to twinkle, promising a peaceful
            night ahead.
          </p>

          <p className=" selection:bg-green-500 hover:text-green-500 text-sm mx-5 m-auto w-[90%] lg:w-[60%] text-green-500  lg:mx-auto selection:text-black text-balance text-center mt-5">
            {" "}
            The sun dipped below the horizon, casting a warm, golden glow over
            the tranquil lake. Birds chirped softly in the distance, creating a
            harmonious symphony that complemented the serene setting. A gentle
            breeze rustled the leaves of the towering oak trees, adding a
            soothing whisper to the evening air. As the sky transitioned to a
            deep, twilight blue, stars began to twinkle, promising a peaceful
            night ahead.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
