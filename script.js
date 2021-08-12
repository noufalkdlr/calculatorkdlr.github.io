function buttonClick(val){
    document.getElementById("screen").value+=val
    
}
function numClear(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function backSpace() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value=value.substr(0, value.length - 1);
}