<script>
    
    /* 
		Ebben az app-ban a usernek ki kell választania egy táblából azokat a képeket, amiken buszok vannak.
		A Next gomb megnyomása után minden jó választás esetén +1 pont jár, rossz választások esetén -1.
    */

    var d = document;
    var busNum = 5; // buszos képek száma, max pont, illetve ennyi képválasztás után jelenik meg a Next gomb
    var correctClicks = 0;

    class KepvalasztasApp{

        static createInput(app) {
        	var picsTable = ''; // változó a tábla létrehozásához szükséges html elemek tárolására
    		var tRowCol = 3; // meghatározza a tábla sorainak és oszlopainak a számát (tRowCol * tRowCol)
    		var picSize = 400 / tRowCol; // a tábla mérete sor -és oszlopszám változás után is 400px

    		var imgArray = new Array();
    		var notBusNum = 0; // segédváltozó a NEM buszos képek sorszámozásához (az alábbi for ciklusban)

    		// Képek elérési útjainak eltárolása az imgArray tömbben:
    		for (var i=0; i<tRowCol*tRowCol; i++){
				if (i < busNum) {
					imgArray[i] = 'public/pics/picSelect/busz' + i + '.jpg';
				} else {
					imgArray[i] = 'public/pics/picSelect/nembusz' + notBusNum + '.jpg';
					notBusNum++;
				}
			}

			// Képek elérési útjainak random összekeverése (ezáltal random sorrendben jelennek majd meg):
			for (var i = imgArray.length - 1; i > 0; i--) {
        		var j = Math.floor(Math.random() * (i + 1));
        		var temp = imgArray[i];
        		imgArray[i] = imgArray[j];
        		imgArray[j] = temp;
    		}

    		var imgNum = 0; // a <td> elemek id-jének meghatározásához a képek száma alapján

			// A tábla elemeinek eltárolása, ami a kattintható képeket tartalmazza majd:
            for(var row=0; row<tRowCol; row++){

            	picsTable += '<tr>';

            	for (var col=0; col<tRowCol; col++){
            		picsTable += '<td class=picSelectClass id=picSelect' + imgNum + 
            			' height=' + picSize + 'px width=' + picSize +'px></td>';
            		imgNum++;
            	}

            	picsTable += '</tr>';
            }

            picsTable = '<table id=imgTable>' + picsTable + '</table>';
            $(picsTable).appendTo(app); // tábla megjelenítése az oldalon

            // Képek megjelenítése a táblában:
            for (var i = 0; i<imgArray.length; i++) {
                let img = d.createElement('img');
                img.id = 'pic' + i; // egyedi id-ik styling-hoz, ha szükséges
                img.src = imgArray[i];

                img.style.height = (picSize - 10) + 'px';
                img.style.width = (picSize - 10) + 'px';

                let clicked = false; // segédváltozó eventListenerhez (többszöri click kiküszöbölése fadingnél)
                // Pontszerzés és pontvesztés megvalósítása, illetve kép fading kattintásra:
                img.addEventListener('click', function() {
                    if (!clicked) {
                        if (img.src.includes("nem")) {
                            correctClicks--;
                        } else if (img.src.includes("busz")) {
                            correctClicks++;
                        }

                        clicked = true;
                        $(img).fadeOut(1500);
                    }
                });
                
                d.getElementById('picSelect' + i).appendChild(img)
            }
            
        }

        static checkInput(app) {
        	return {max: busNum, score: correctClicks};
        }
    } 
</script>