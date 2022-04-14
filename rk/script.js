function cal(){
    var a=document.getElementById("text1").value;
    var b=document.getElementById("text2").value;
    var c=document.getElementById("text3").value;
    if(a>b && a>c){
        window.alert(a+" is the gratest number ");
    }
    else if(b>a && b>c){
        window.alert(b+" is the gratest number ");
    }
    else{
        window.alert(c+" is the gratest number ");
    }
}
function clr(){
    document.getElementById("text1").value=' ';
    document.getElementById("text2").value=' ';
    document.getElementById("text3").value=' ';
}