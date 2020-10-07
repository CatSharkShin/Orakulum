<script>
    /*This is the app controller, you dont have to deal with this,
    but you can read it so you understand how your functions are being/will be used.
    */
    function nextApp(app_container){

        //apps: app names from the php AppNames var
        //currApp: current App(0->1...)
        //eval(apps[currApp]+".checkInput()")
        if(currApp + 1 < apps.length){
            appScore = eval(apps[currApp]+".checkInput(app_container)");
            score += appScore["score"];
            max += appScore["max"];
            currApp++;
            loadNextApp(app_container);
        }else{
            done();
        }
    }
    function loadNextApp(app_container){
        //Cleaning the div and adding a placeholder for the user to know whats happening
        app_container.innerHTML = "Következő feladat betöltése...";
        //Loading the corresponding php file before running the function
        //This way you have two options to generate a "test form"
        var sitepath = "private/site/"+apps[currApp].toLowerCase()+".php";
        //Checking if the file exists
        $.ajax({
            url: sitepath,
            type:'HEAD',
            error: function(xhr, ajaxOptions, thrownError)
            {
                console.log("App's php file could not be loaded");
                //running the createInput of the next app
                if(eval("typeof "+apps[currApp]+".createInput === 'function'"))
                    eval(apps[currApp]+".createInput(app_container)");
            },
            success: function()
            {
                //Loading the php file into the app div
                $("#app_div").load("private/site/"+apps[currApp]+".php",
                    //This is a callback function that runs after the file is loaded
                    function(){
                        //running the createInput of the next app
                    if(eval("typeof "+apps[currApp]+".createInput === 'function'"))
                        eval(apps[currApp]+".createInput(app_container)");
                    }
                );
            }
        });
    }
    function done(){
        $('#app_div').load("private/site/result.php",function(){
            var percent = score/max*100;
            if(percent < 70){
                if(percent < 60)
                    if(percent < 50)
                        species = "robot";
                    else
                        species = "cyberman";
                else
                    species = "cyborg";
            }
            $('#result').html(percent+"%, you are a(an): "+species);
            $("#submit").html("Download PDF");
            $("#submit").attr({
                onClick: "resultPDF()",
            });
        });
    }
    function resultPDF(){
        var doc = new jsPDF();
        var elementHandler = {
          '#ignorePDF': function (element, renderer) {
            return true;
          }
        };
        var title = d.createElement("h1");
        title.innerHTML = "Orákulum teszt certifikáció";
        var result = d.createElement("h2");
        result.innerHTML = score/max * 100 + "%, species: "+species;
        var name = d.createElement("p");
        name.innerHTML = d.getElementById("user_name").value;
        var elements = d.createElement("div");
        elements.appendChild(title);
        elements.appendChild(result);
        elements.appendChild(name);
        doc.fromHTML(elements,15,15,{
            'width': 170,
            'elementHandlers': elementHandler
        });
        doc.save('Oraculum_result.pdf');
    }
</script>