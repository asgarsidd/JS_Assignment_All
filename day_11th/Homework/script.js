var tiplabel=document.getElementById("tiplabel")
tiplabel.style.display="none";
var calulate=document.getElementById("calcbtn");
calulate.addEventListener('click',()=>{
var billamount=document.getElementById("Amount").value;
var serviceQuality=document.getElementById("Squality").value;
var numPeople=document.getElementById("totalPeople").value;
document.getElementById("totaltip").value=" RS "+(billamount*serviceQuality)/numPeople+" !";
tiplabel.style.display="inline";
})