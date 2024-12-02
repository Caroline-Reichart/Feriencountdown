const ReleaseDate = new Date("dec 20, 2024 13:30:00").getTime();
const TimerFunction = setInterval(function() {
    let DatumHeute = new Date().getTime();
    let Differenz = ReleaseDate - DatumHeute;

    let d = Math.floor(Differenz / (1000 * 60 * 60 * 24));
    let h = Math.floor((Differenz % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((Differenz % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((Differenz % (1000 * 60)) / 1000);
    
document.getElementById("timer").innerHTML =  
"<span>" + 
d +
"<br><i>Tage</i></span><span>" + 
h + 
"<br><i>Stunden</i></span><span>" + 
m + 
"<br><i>Minuten</i></span><span>" + 
s + 
"<br><i>Sekunden</i></span>";

if (Differenz < 0) {
        clearInterval(TimerFunction);
        document.getElementById("timer").innerHTML = "Ferien"; 
    } 

}, 1000) 

