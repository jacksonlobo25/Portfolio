import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const TypedLine = ({ text }) => {
  const [done, setDone] = useState(false);

  return (
    <Typewriter
      words={[text]}
      cursor={!done}
      cursorStyle="_"
      typeSpeed={30}
      deleteSpeed={0}
      delaySpeed={500}
      loop={1}
      onLoopDone={() => setDone(true)}
    />
  );
};

export default TypedLine;
