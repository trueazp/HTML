window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#d36060",
    "#d3d160",
    "#60d394",
    "#60c2d3",
    "#c060d3",
    "#606bd3"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 0.7s ease-in-out`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
