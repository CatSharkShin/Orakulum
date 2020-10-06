<script>

var d = document;
var maxp = 5;
var ach = 0;

class MatekmuveletApp{

static createInput(app) {
    let operators = ["+","-","*"];
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let random = Math.floor(Math.random() * 3);
    let o = operators[random];

    let para = d.createElement("P");
    para.innerText = a+""+o+""+b;
    app.appendChild(para);

    let result = 0;
    if (random == 0)
    {
        result = a + b;
    }
    if (random == 1)
    {
        result = a - b;
    }
    if (random == 2)
    {
        result = a * b;
    }

    var x = d.createElement("INPUT");
    x.setAttribute("type", "text");
    app.appendChild(x);

    let input = 0;

    function getValueX() {
        input = x.value;
    }

    
    var btn = d.createElement("BUTTON");
    btn.innerHTML = "Oké!";
    btn.addEventListener("click", getValueX());
    app.appendChild(btn);

    if (input == result)
    {
        ach++;
    }
    else
    {
        ach--;
    }

    }

static checkInput(app) {
    return {max: maxp, score: ach};
    }

}

</script>