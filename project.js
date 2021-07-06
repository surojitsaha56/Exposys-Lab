function showDate(){
    var today = new Date();
    var day, month, year, result;
    day=today.getDate();
    month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    year=today.getFullYear();
    if (day==1||day==21||day==31){
        result=day+"st "+month[today.getMonth()]+", "+year;
    }
    else if (day==2||day==22){
        result=day+"nd "+month[today.getMonth()]+", "+year;
    }
    else if (day==3||day==23){
        result=day+"rd "+month[today.getMonth()]+", "+year;
    }
    else{
        result=day+"th "+month[today.getMonth()]+", "+year;
    }
    document.getElementById("date").innerText=result;
}
window.onload = showDate;



