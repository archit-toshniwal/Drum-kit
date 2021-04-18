
for(var i=0;i<document.querySelectorAll('.drum').length;i++)
{
        document.querySelectorAll("button")[i].addEventListener("click",function(){
           sound_play(this.innerHTML);
           button_animate(this.innerHTML);
        })
}

document.addEventListener("keydown",function(event)
{
    sound_play(event.key);
    button_animate(event.key);
})


function sound_play(key)
{
    var audio_to_plaY;
    switch(key)
    {
         case 'w':
             audio_to_plaY = "sounds/crash.mp3";
             break;
         case 'a': 
             audio_to_plaY = "sounds/kick-bass.mp3";
             break;
         case 's':
             audio_to_plaY = "sounds/snare.mp3";
             break;
         case 'd':
             audio_to_plaY = "sounds/tom-1.mp3";
             break;
         case 'j':
             audio_to_plaY = "sounds/tom-2.mp3";
             break;
         case 'k':
             audio_to_plaY = "sounds/tom-3.mp3";
             break;
         case 'l': 
             audio_to_plaY = "sounds/tom-4.mp3";
             break;
    }

    audio = new Audio(audio_to_plaY);
    audio.play();
}

function button_animate(key)
{
        var btn = document.querySelector("."+key);
        btn.classList.add("pressed");
        setTimeout(
            function()
            {
                    btn.classList.remove("pressed");
            },100
        )

}