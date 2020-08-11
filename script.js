function shiftsChange(action,res){
    var x = parseInt(document.getElementById(res).innerHTML); 
    if(action == "up"){
        x += 1;
    }else{
        if(x > 0){
            x -= 1;
        }
    }
    console.log(x);
    console.log(res);
    document.getElementById(res).innerHTML = x;
}

function modeType(type){
    // document.querySelector("personal").setAttribute("style","display: none;");
    // document.querySelector("personal").setAttribute("style","display: none;");

    // document.getElementsByClassName("grid-container-personal").style = "none";
    // document.getElementsByClassName("grid-container-overall").style = "none";

    // document.getElementsByClassName("grid-container-admin").style = "none";

    document.getElementById("personal").style.display = "none";
    document.getElementById("admin").style.display = "none";
    document.getElementById("overall").style.display = "none";
    
    if(type == "overall"){
        // document.getElementsByClassName("grid-container-overall").style = "block";

        document.getElementById("overall").style.display = "block";
    }else if(type == "my"){
        // document.getElementsByClassName("grid-container-personal").style = "block";

        document.getElementById("personal").style.display = "block";
    }else{
        // document.getElementsByClassName("grid-container-admin").style = "block";

        document.getElementById("admin").style.display = "block";
    }



}