function zeroWiodace(element) {
    if (element < 10)  element = "0" + element;
   
}

function odliczanie(){
    var today = new Date();

    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
   
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var birthday = new Date(2016, 0, 30, 19, 0, 0, 0);
    var ms_at_day = 24 * 60 * 60 * 1000;
    

    var anniversary = (birthday.getTime() - today.getTime());

    var eDayTo = anniversary / ms_at_day;
    var DayTo = Math.floor(eDayTo);
    var eHoursTo = (eDayTo - DayTo) * 24;
    var HoursTo = Math.floor(eHoursTo);
    var eMinutesTo = (eHoursTo - HoursTo) * 60;
    var MinutesTo = Math.floor(eMinutesTo);
    var eSecondsTo = (eMinutesTo - MinutesTo) * 60;
    var SecondsTo = Math.floor(eSecondsTo);


    document.getElementById("timer").innerHTML = DayTo + "/" + HoursTo + "/" + MinutesTo + "/" + SecondsTo;
    setTimeout("odliczanie()", 1000);
}
}