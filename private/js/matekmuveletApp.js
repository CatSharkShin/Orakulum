<script>

var d = document;
var maxp = 3;
var ach = 0;

class MatekmuveletApp{

    static createInput(app) {
        let operators = ["+","-","*"];
        let a, b, o, random, input, result;
        let iterator = 0;

        ujMuvelet();

        function ujMuvelet() {
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            random = Math.floor(Math.random() * 3);
            o = operators[random];

            let para = d.createElement("P");
            para.innerText = a+""+o+""+b;
            app.appendChild(para);

            result = 0;

            if (random == 0) {
                result = a + b;
            } else if (random == 1) {
                result = a - b;
            } else if (random == 2) {
                result = a * b;
            }

            var x = d.createElement("INPUT");
            x.setAttribute("type", "text");
            x.setAttribute("class", "btn btn-info");
            app.appendChild(x);
        
            var btn = d.createElement("BUTTON");
            btn.innerHTML = "Oké!";
            btn.setAttribute("class", "btn btn-info");
            btn.addEventListener("click", function(){

                app.removeChild(btn);
                app.removeChild(x);
                app.removeChild(para);
                
                input = x.value;
                iterator++;

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