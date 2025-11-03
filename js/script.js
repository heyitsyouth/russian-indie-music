let translate = false;

function setLanguage() {
    if (!translate) {
        document.getElementById("pass_given1").textContent = "MINISTRY OF COOL REPUBLIC";
        document.getElementById("pass_date").textContent = "55.44.2077";
        document.getElementById("pass_code").textContent = "HYPE-SWG";
        document.getElementById("hfamilia").textContent = "NIKULIN";
        document.getElementById("hname").textContent = "IVAN";
        document.getElementById("hfname").textContent = "ILYICH";
        document.getElementById("hpol").textContent = "MALE";
        document.getElementById("hborn").textContent = "20.11.2005";
        document.getElementById("hpborn1").textContent = "CITY SWAGA";
        document.getElementById("hpborn2").textContent = "HYPE REGION";
    translate = true;
} 
    else {
        document.getElementById("pass_given1").textContent = "МВД ПО КРУТОЙ РЕСПУБЛИКЕ";
        document.getElementById("pass_date").textContent = "55.44.2077";
        document.getElementById("pass_code").textContent = "HYPE-SWG";
        document.getElementById("hfamilia").textContent = "Никулин";
        document.getElementById("hname").textContent = "Иван";
        document.getElementById("hfname").textContent = "Ильич";
        document.getElementById("hpol").textContent = "МУЖ.";
        document.getElementById("hborn").textContent = "20.11.2005";
        document.getElementById("hpborn1").textContent = "Гор. Свага";
        document.getElementById("hpborn2").textContent = "Хайповая область";
    translate = false;
}
}