<script>

var d = document;
var maxPoint = 5;
var pointsAch = 0;
var allObjArray = new Array();

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

		// Checkboxok és label-ek legenerálása, megjelenítése:
		for (var i=0; i<maxPoint*2; i++){
			let checkBox = d.createElement("INPUT");
			checkBox.setAttribute("type", "checkbox");
			checkBox.setAttribute("id", "cbObjSelect" + i);

			if (objOnPic.includes(allObjArray[i]))
				checkBox.setAttribute("class", "objOnPic");
			else checkBox.setAttribute("class", "objNotOnPic");

			let label = d.createElement('label');
			label.htmlFor = "cbObjSelect" + i;
			label.innerHTML = allObjArray[i];

			$(checkBox).appendTo("#objSelDiv");
			$(label).appendTo("#objSelDiv");

			// Sortörés minden 5. checkbox után:
			if ((i+1) % 5 === 0) {
				var br = document.createElement("br");
				$(br).appendTo("#objSelDiv");
			}
		}

	}

	static checkInput(app) {

		let cb = '';

		for(var i=0; i<maxPoint*2; i++){
			cb = d.getElementById("cbObjSelect" + i)

		    if(cb.checked && cb.className == "objOnPic")
		        pointsAch++;
		    else if (cb.checked && cb.className == "objNotOnPic")
		    	pointsAch--;
		}

	    return {max: maxPoint, score: pointsAch};
	}

}

</script>
