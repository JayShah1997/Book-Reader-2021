export const playSound = (soundobj) => {
  const audio = document.getElementById(soundobj);
  audio.play();
};

export const stopSound = (soundobj) => {
  const audio = document.getElementById(soundobj);
  audio.pause();
  audio.currentTime = 0;
};
