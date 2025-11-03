function calculate() {
    // получаем значение из input
    let a = parseFloat(document.getElementById("input_calc").value);
    
    // проверяем, что введено число
    if (isNaN(a)) {
        alert("пожалуйста, введите число!");
        return;
    }
    
    let x;
    
    // проверяем условие и вычисляем
    if (a < 62) {
        // если a < 62
        x = Math.pow(a, 2) + 4 + 5;
    } else {
        // иначе (a >= 62)
        x = (1 / Math.pow(a, 2)) + (4 * a) + 5;
    }
    
    // выводим результат
    document.getElementById("result").innerHTML = 
        "При a = " + a + "<br>Результат: x = " + x;
}

function clearResult() {
    document.getElementById("result").innerHTML = "Результат появится здесь";
    document.getElementById("inputA").value = "";
}