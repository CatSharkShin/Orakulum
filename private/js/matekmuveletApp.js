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

    var x = d.createElement("INPUT");
    x.setAttribute("type", "text");
    app.appendChild(x);

    }

static checkInput(app) {
    return {max: maxp, score: ach};
    }

}

</script>