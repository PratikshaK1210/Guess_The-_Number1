let target = document.getElementsByTagName("form")[0];
target.addEventListener("submit",function(e){
    e.preventDefault()
    let uin  =  document.getElementById("in1");
   checkNum(uin.value);
})
var computerNum = undefined;
function checkNum(val){
 computerNum = Math.round(Math.random() * 10);
 console.log(computerNum)
 if(val == computerNum){
    document.getElementById("result").innerHTML = "CORRECT !!!";
    document.body.style.backgroundColor = "#42f563";
    setTimeout(function(){
        document.location.reload();
    },1000)
 }
 else{
    document.getElementById("result").innerHTML = "WRONG !!!";
    document.body.style.backgroundColor = "red  ";
    setTimeout(function(){
        document.location.reload();
    },1000)
 }
}