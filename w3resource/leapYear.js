function leapYear(){
    var l = document.getElementById("text1").value;
    if(l%400==0 || l%4==0){
        window.alert(l+" is leap year");
    }
    else if(l%100==0){
        window.alert(l+" is not leap year");
    }
    else{
        window.alert(l+" is not leap year");
    }
}