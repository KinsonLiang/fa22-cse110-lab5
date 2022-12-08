// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() 
{
  // Declare objects
  const synth = window.speechSynthesis;
  const selections = document.getElementById('voice-select');
  const text = document.getElementById('text-to-speak');
  const play = document.querySelector('button');
  const face = document.querySelector('img');
  let all_voices = [];

  setTimeout(() => 
  {
    all_voices = synth.getVoices();

    for (let i = 0; i < all_voices.length ; i++) 
    {
      const voice_select = document.createElement('option');
      voice_select.textContent = `${all_voices[i].name} (${all_voices[i].lang})`;
      if (all_voices[i].default)
      {
        voice_select.textContent += ' — DEFAULT';
      }
        
      voice_select.setAttribute('data-lang', all_voices[i].lang);
      voice_select.setAttribute('data-name', all_voices[i].name);
      selections.appendChild(voice_select);
    }
  }, 1000);

  play.addEventListener('click', (event) => 
  {
    const speaks = new SpeechSynthesisUtterance(text.value);
    const choice = selections.selectedOptions[0].getAttribute('data-name');

    for (let i = 0; i < all_voices.length ; i++) 
    {
      if (all_voices[i].name === choice)
      {
        speaks.voice = all_voices[i];
        break;
      }
    }

    face.src = "assets/images/smiling-open.png";
    synth.speak(speaks);
    let exitInterval = setInterval(function () 
    {
      if(!synth.speaking) 
      {
        face.src = "assets/images/smiling.png";
        clearInterval(exitInterval);
      }
    }, 100);
  });
}