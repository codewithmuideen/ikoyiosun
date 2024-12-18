import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const music1 = useRef(new Audio("music1.mp3")); // Replace with actual file path
  const music2 = useRef(new Audio("music2.mp3")); // Replace with actual file path

  useEffect(() => {
    const playMusicSequence = () => {
      let isMusic1Playing = true;

      const playMusic1 = () => {
        music1.current.currentTime = 0; // Reset to start
        music1.current.play();
        console.log("Playing Music 1");
      };

      const playMusic2 = () => {
        music2.current.currentTime = 0; // Reset to start
        music2.current.play();
        console.log("Playing Music 2");
      };

      // Start with Music 1
      playMusic1();

      // Schedule Music 2 after 40 seconds
      let interval = setInterval(() => {
        if (isMusic1Playing) {
          music1.current.pause();
          playMusic2();
        } else {
          music2.current.pause();
          playMusic1();
        }
        isMusic1Playing = !isMusic1Playing;
      }, 40000); // 40 seconds switch interval

      // Cleanup when unmounting
      return () => {
        clearInterval(interval);
        music1.current.pause();
        music2.current.pause();
      };
    };

    // Start the sequence
    playMusicSequence();
  }, []);

  return <div>Background Music Playing...</div>;
};

export default BackgroundMusic;
