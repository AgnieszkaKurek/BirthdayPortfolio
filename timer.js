function zeroWiodace(element) {
    if (element < 10)  element = "0" + element;
   
}

function pokazOdliczanie(){
    var today = new Date();

    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
   
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    var birthday = new Date(2016,0,30,19,0,0,0);
    

    var anniversary  =  (birthday.getTime() -  today.getTime());
}