<script>

var d = document;
var maxp = 3;
var ach = 0;

class MatekmuveletApp{
    //Inicializáció
    static createInput(app) {
        let operators = ["+","-","*"];
        let a, b, o, random, input, result;
        let iterator = 0;

        ujMuvelet();
        //
        function ujMuvelet() {
            //Randomszám és operátor generátor
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            random = Math.floor(Math.random() * 3);
            o = operators[random];

            //Új paragrafus létrehozása a művelet kiíratásának
            let para = d.createElement("P");
            para.innerText = a+""+o+""+b;
            app.appendChild(para);

            result = 0;
            //Operátor vizsgálata
            if (random == 0) {
                result = a + b;
            } else if (random == 1) {
                result = a - b;
            } else if (random == 2) {
                result = a * b;
            }
            //Textbox elkészítése
            var x = d.createElement("INPUT");
            x.setAttribute("type", "text");
            app.appendChild(x);
            //Gomb elkészítése
            var btn = d.createElement("BUTTON");
            btn.innerHTML = "Oké!";
            btn.addEventListener("click", function(){

                app.removeChild(btn);
                app.removeChild(x);
                app.removeChild(para);
                
                input = x.value;
                iterator++;
                //Pontszámok számítása
                if (input == result) {
                    ach++;
                } else {
                    ach--;
                }

                if (iterator < maxp) 
                    ujMuvelet();
            });
            app.appendChild(btn);
        }
    }

    static checkInput(app) {
        return {max: maxp, score: ach};
    }

}

</script>