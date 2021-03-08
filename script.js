var character= document.getElementById("character");

var block = document.getElementById("block");

var newdur = 1.6;

function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(() => {
        character.classList.remove("animate");
    }, 600);
}


var checkdead = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blocklLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blocklLeft<50 && blocklLeft>0 && characterTop>=130){
        
        block.style.animation="none";
        block.style.display="none";
        alert("Cat ate the cake!!! YOU LOSE!!\nReload to RESTART.");
    }
}, 10);



var checkdur = setInterval(() => {
    
    newdur-=0.04;
    var n = String(newdur);
    //console.log("duration= "+n);
    var d = String(parseFloat(n))+"s";
    //console.log("duration_string= "+d);
    block.style.animationDuration=d ;

}, 1600);

