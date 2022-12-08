// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  const images = document.querySelector('img');
  const audio = document.querySelector('audio');
  const choice = document.getElementById('horn-select');
  const volume_bar = document.getElementById('volume');
  const start_button = document.querySelector('button')
  const jsConfetti = new JSConfetti();

  choice.addEventListener('change', (event) => 
  {
    const image = document.querySelector('header~img');
    
    image.src = "assets/images/" + `${event.target.value}` + ".svg";
    audio.src = "assets/audio/" + `${event.target.value}` + ".mp3";
  });

  volume_bar.addEventListener('change', (event) => 
  {
    const volume_value = `${event.target.value}`;
    audio.volume = volume_value / 100;
    const image = document.querySelector('#volume-controls > img');

    if(volume_value == 0)
    {
      image.src = "assets/icons/volume-level-0.svg";
    }
    else if(volume_value < 33)
    {
      image.src = "assets/icons/volume-level-1.svg";
    }
    else if(volume_value < 67)
    {
      image.src = "assets/icons/volume-level-2.svg";
    }
    else
    {
      image.src = "assets/icons/volume-level-3.svg";
    }
  });

  start_button.addEventListener('click', (event) => 
  {
    if(choice.value == "select")
    {
      return;
    }

    if(choice.value == "party-horn") 
    {
      jsConfetti.addConfetti();
    }
    
    audio.play();
  });
}