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
	    	"Függöny", "Ajtó", "Laptop"
	    	];

	    stringShuffleInArray(objOnPic);
	    
	    // Tömb, melyben a képen NEM szereplő tárgyak vannak:
	    var objNotOnPic = [
	    	"Csuklósbusz", "Kutya", "Váza", 
	    	"Seprű", "Kolbász", "Távcső", 
	    	"Sajt", "Faliújság", "Porsche"
	    	];

	    stringShuffleInArray(objNotOnPic);

	     // Funkció stringek összekeverésére egy tömbben:
	    function stringShuffleInArray(stringArray) {
	    	for (var i = stringArray.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = stringArray[i];
				stringArray[i] = stringArray[j];
				stringArray[j] = temp;
			}
	    }

	    // Képen szereplő és nem szereplő tárgyak betöltése egy tömbbe:
	    var notObjIndex = 0;

	    for (var i=0; i<maxPoint*2; i++){
			if (i < maxPoint) {
				allObjArray[i] = objOnPic[i];
			} else {
				allObjArray[i] = objNotOnPic[notObjIndex];
				notObjIndex++;
			}
		}

		stringShuffleInArray(allObjArray);

	}

	static checkInput(app) {
	    return {max: maxPoint, score: pointsAch};
	    }

	}

</script>