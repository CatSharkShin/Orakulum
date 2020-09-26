<script>

    var d = document;
    var numofchecks = 5;

    class TestApp{
        //The Class name has to be the same as the filename, letter case doesnt matter. 
        static createInput(app) {
            /*
            createInput függvény:
            a
            */
            for(var i=0;i<numofchecks;i++){
                //creating the checkboxes and appending them
                $('<input>').attr({
                        type: "checkbox",
                        name: i,
                        id: "check_"+i,
                        //Random h checkolt-e
                        checked: Math.random()<0.5,
                }).appendTo(app);

                //Label létrehozása, beállítása, appendelése
                var label = d.createElement("Label");
                label.setAttribute("for",i);
                label.innerHTML = i;
                app.appendChild(label);
            }
        }
        static checkInput(app){
            //Counting the checks
            var checks = 0;
            /*
            app.childNodes.forEach:
            A foreach loop for the elements in "app" ("#div_app")
                In the loop we can access the elements with the var "e"
                    In this loop i check if the element's tag is "INPUT"
                    If it is, i log it.(Browser-> F12 / Ctrl+Shift+C -> Console)
            This is just an example loop that you can use in your app,
            i recommend it because its dynamic.
            e.tagName always returns the tag in UPPERCASE.

            app childjain foreachet hajtunk végre, melyek elemei "e"
            ként lesznek jelen.
            Ha "e" tagje "INPUT" akkor logoljuk.
            Ezt azért tettem ide, hogy tudjátok így is kezelhetitek az appban
            lévő elemeket.
            e.tagName mindig UPPERCASE!
            */
            app.childNodes.forEach(function (e){
                if(e.tagName == "INPUT")
                    console.log(e);
            });

            for(var i=0;i<numofchecks;i++){
                if(d.getElementById("check_"+i).checked)
                    checks++;
            }
            /*
                Return an associative array that contains a "max" and a "score"
                key, containing the maximum score that the user can achieve, and the
                score that the user achieved.
            */
            return {max: numofchecks,score: checks};
        }
    }
</script>