function ergebnis() {
    let x = 0;
    x = eval(window.document.rechner.display.value);
    window.document.rechner.display.value = x;
}
/* x hat startwert 0, weil 0 neutrales element
* x wird bestimmt durch den evaluated/ausgerechneten wert der eingabe vom display
* der wert vom ausgerechneten x wird dem des displays zugewiesen*/
function hinzufuegen(Zeichen) {
    window.document.rechner.display.value =
        window.document.rechner.display.value + Zeichen;
}
/*wird aufgerufen, wenn man auf den button clickt, können also nur die ziffern und operatoren sein
* aktuellem wert des displays wird der bisherige wert + das neue zeichen hinzugefügt*/
function sonderfunktion(Funktion) {
        if(Funktion == "sqrt") {
            let x = 0;
            x = eval(window.document.rechner.display.value);
            window.document.rechner.display.value = Math.sqrt(x);//wurzel=math.sqrt
        }
        if(Funktion == "pow") {
            let x = 0;
            x = eval(window.document.rechner.display.value);
            window.document.rechner.display.value = x * x;//pow=quadrieren, also x*x
        }
        if(Funktion =="log") {
            let x = 0;
            x = eval(window.document.rechner.display.value);
            window.document.rechner.display.value = Math.log(x);
        }
}
/*mögliche übergabewerte sind sqrt,log und pow; startwert von x ist 0
* bei übergabe einer dieser werte wird im entsprechenden if-zweig der eingabewert des displays mit der funktion berechnet
*   das ergebnis nach der rechenoperation wird dem display zugewiesen*/