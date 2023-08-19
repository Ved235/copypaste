x = 0;
function menu_pressed() {
    console.log("hi");
    
    if(x == 0)
    {
        document.getElementById("circle_zoom").style = "transform:scale(2500); ";
        document.getElementById("bars").style = "color: rgba(255, 255, 255, 0); ";
        document.getElementById("cross").style = "animation-name: rotate;animation-duration: 1s;color:white; ";
        document.getElementById("up1").style = "transform: translateY(0px);transition-delay: .07s; ";
        document.getElementById("up2").style = "transform: translateY(0px);transition-delay: .14s;";
        document.getElementById("up3").style = "transform: translateY(0px);transition-delay: .21s; ";
        document.getElementById("navbar").style = "transform: translateY(0px);";
        x++
    }
    else{
        document.getElementById("circle_zoom").style = "transform:scale(.0004); transition-delay: .2s;";
        document.getElementById("cross").style = "color: rgba(255, 255, 255, 0); ";
        document.getElementById("bars").style = "color: rgba(255, 255, 255, 1);animation-name: rotate;animation-duration: 1.2s;";
        document.getElementById("up1").style = "transform: translateY(calc(-100% - 10rem));transition-delay: .14s;";
        document.getElementById("up2").style = "transform: translateY(calc(-100% - 10rem));transition-delay: .07s;";
        document.getElementById("up3").style = "transform: translateY(calc(-100% - 10rem));";
        document.getElementById("navbar").style = "transform: translateY(calc(-100% - 10rem));transition-delay: 1s;";
        
        
        x=0;
    }
    
}

function hover(a){
    document.getElementById('nav_image').style =  'background-image: url("/images/' + a + '.jpg")';
}