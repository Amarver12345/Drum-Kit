var beatproduced=[];
var numberOfDrumButtons=document.querySelectorAll("button").length;
for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHtml=this.innerHTML;
        buttonanimation(buttonInnerHtml);
        beatproduced.push(buttonInnerHtml);
        makesound(buttonInnerHtml);
        switch(buttonInnerHtml){
            case "w":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                var tom1 = new Audio('./sounds/tom-2.mp3');
                tom1.play();
                break;
            case "s":
                var tom2 = new Audio('./sounds/tom-3.mp3');
                tom2.play();
                break;
            case "d":
                var tom3 = new Audio('./sounds/tom-4.mp3');
                tom3.play();
                break;
            case "j":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
                break;
            case "k":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                var kick = new Audio('./sounds/kick-bass.mp3');
                kick.play();
                break;
            default:
                console.log("wrong key pressed");
        }
    });
}
document.addEventListener("keydown",function(event){
    beatproduced.push(event.key);
    buttonanimation(event.key);
    makesound(event.key);


})
function makesound(key){
    switch(key){
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio('./sounds/tom-2.mp3');
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio('./sounds/tom-3.mp3');
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio('./sounds/tom-4.mp3');
            tom3.play();
            break;
        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log("wrong key pressed");
    }
}
document.querySelector(".beat").addEventListener("click",function(){
    for (let i=0; i<=beatproduced.length; i++) {
        task(i);
     }
       
     function task(i) {
       setTimeout(function() {
        makesound(beatproduced[i]);
        buttonanimation(beatproduced[i]);
       }, 500 * i);
     }
});
function buttonanimation(currentkey){
    var activebutton = document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);

}

