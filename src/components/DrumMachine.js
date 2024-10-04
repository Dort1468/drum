import React, { useEffect, useState } from "react";

const DrumMachine = () => {
  const [currentDrum, setCurrentDrum] = useState();

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const audio = document.getElementById(key);
    if (audio) {
      const drumName = audio.parentElement.id;
      setCurrentDrum(drumName);
      audio.currentTime = 0;
      audio.play();
    }
  };

  const handleClick = (e) => {
    const audio = e.target.children[0];
    const drumName = e.target.id;
    setCurrentDrum(drumName);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <div id="wrapper">
        <div id="drum-machine">
          <div id="display">
            <div id="display-btn">
              <button className="drum-pad" onClick={handleClick} id="Heater-1">
                <audio
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
                  id="Q"
                  className="clip"
                  type="audio/mpeg"
                ></audio>
                Q
              </button>
              <button className="drum-pad" onClick={handleClick} id="Heater-2">
                <audio
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
                  id="W"
                  className="clip"
                  type="audio/mpeg"
                ></audio>
                W
              </button>
              <button className="drum-pad" onClick={handleClick} id="Heater-3">
                <audio
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
                  id="E"
                  className="clip"
                  type="audio/mpeg"
                ></audio>
                E
              </button>
              <button className="drum-pad" onClick={handleClick} id="Heater-4">
                <audio
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
                  id="A"
                  className="clip"
                  type="audio/mpeg"
                ></audio>
                A
              </button>
              <button className="drum-pad" onClick={handleClick} id="Clap">
                <audio
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
                  id="S"
                  className="clip"
                  type="audio/mpeg"
                ></audio>
                S
              </button>
              <button className="drum-pad" onClick={handleClick} id="Open-HH">
                <audio
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
                  id="D"
                  className="clip"
                  type="audio/mpeg"
                ></audio>
                D
              </button>
              <button
                className="drum-pad"
                onClick={handleClick}
                id="Kick-n'-Hat"
              >
                <audio
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
                  id="Z"
                  className="clip"
                  type="audio/mpeg"
                ></audio>
                Z
              </button>
              <button className="drum-pad" onClick={handleClick} id="Kick">
                {" "}
                <audio
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
                  id="X"
                  className="clip"
                  type="audio/mpeg"
                ></audio>
                X
              </button>
              <button className="drum-pad" onClick={handleClick} id="Closed-HH">
                <audio
                  src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
                  id="C"
                  className="clip"
                  type="audio/mpeg"
                ></audio>
                C
              </button>
            </div>
            <h2>{currentDrum}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
