import React from "react";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";

function Type() {
  const len = useSelector(state => state.len);

  return (
    len === "ES" ?
      <Typewriter
        options={{
          strings: [
            "Desarrollador",
            "Amante de React",
            "Colaborador Open Source",
            "Compulsivo de JavaScript"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      :
      <Typewriter
        options={{
          strings: [
            "Developer",
            "React Lover",
            "Open Source Contributor",
            "Javascript Enjoyer"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
  );
}

export default Type;
