<script>

var d = document;
var maxPoint = 5;
var pointsAch = 0;

class TargykeprolvalasztasApp{

static createInput(app) {
    
    // Tömb, melyben a képen szereplő tárgyak vannak:
    var objOnPic = [
    	"TV", "Zászló", "Lego",
    	"Szék", "Pohár", "Könyv",
    	"Függöny", "Ajtó", "Laptop", "Egér"
    	];
    
    // Tömb, melyben a képen NEM szereplő tárgyak vannak:
    var objNotOnPic = [
    	"Csuklósbusz", "Kutya", "Váza", 
    	"Seprű", "Kolbász", "Távcső", 
    	"Sajt", "Faliújság"
    	];

    }

static checkInput(app) {
    return {max: maxPoint, score: pointsAch};
    }

}

</script>