// function for changing text color
function changeColor(e){

    if(e == "Pink"){
      document.getElementById('heading').style.color="hotpink";
    }else if(e == "Green"){
        document.getElementById('heading').style.color="Green";
    }else if(e == "Yellow"){
        document.getElementById('heading').style.color="Yellow";
    }else if(e == "Blue"){
        document.getElementById('heading').style.color="Blue";
    }else if(e == "Red"){
        document.getElementById('heading').style.color="Red";
    }
}
// function for changing background color
function changeBgColor(e){
     
    if(e == "LightCoral"){
      document.getElementById('main').style.backgroundColor="LightCoral";
    }else if(e == "LightCyan"){
        document.getElementById('main').style.backgroundColor="LightCyan";
    }else if(e == "LightSalmon"){
        document.getElementById('main').style.backgroundColor="LightSalmon";
    }else if(e == "PapayaWhip"){
        document.getElementById('main').style.backgroundColor="PapayaWhip";
    }else if(e == "Moccasin"){
        document.getElementById('main').style.backgroundColor="Moccasin";
    }
} 

// function for changing Padding
function changePadding(e){
     
    if(e == "10pxp"){
      document.getElementById('main').style.padding="10px";
      document.getElementById('main').style.left="15%";
    }else if(e == "20pxp"){
        document.getElementById('main').style.padding="20px";
        document.getElementById('main').style.left="16%";
    }else if(e == "30pxp"){
        document.getElementById('main').style.padding="30px";
        document.getElementById('main').style.left="14%";
    }else if(e == "40pxp"){
        document.getElementById('main').style.padding="40px";
        document.getElementById('main').style.left="12%";
    }else if(e == "50pxp"){
        document.getElementById('main').style.padding="50px";
        document.getElementById('main').style.left="90px";
    }
} 
// function for changing font size
function changeSize(e){
     
    if(e == "20pxf"){
      document.getElementById('heading').style.fontSize="20px";
    }else if(e == "30pxf"){
        document.getElementById('heading').style.fontSize="30px";
    }else if(e == "40pxf"){
        document.getElementById('heading').style.fontSize="40px";
    }else if(e == "50pxf"){
        document.getElementById('heading').style.fontSize="50px";
    }else if(e == "60pxf"){
        document.getElementById('heading').style.fontSize="60px";
    }
} 
// function for changing font weight
function changeWeight(e){
     
    if(e == "bold"){
      document.getElementById('heading').style.fontWeight="bold";
    }else if(e == "bolder"){
        document.getElementById('heading').style.fontWeight="bolder";
    }else if(e == "normal"){
        document.getElementById('heading').style.fontWeight="normal";
    }else if(e == "lighter"){
        document.getElementById('heading').style.fontWeight="lighter";
    }
}