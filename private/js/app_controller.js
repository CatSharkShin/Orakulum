<script>
    /*This is the app controller, you dont have to deal with this,
    but you can read it so you understand how your functions are used.
    */
    function nextApp(){
        //apps: app names from the php AppNames var
        //currApp: current App(0->1...)
        //eval(apps[currApp]+".checkInput()")
        appScore = eval(apps[currApp]+".checkInput(d.getElementById('app_div'))");
        score += appScore["score"];
        max += appScore["max"];
        if(currApp + 1 < apps.length){
            currApp++;
            loadNextApp();
        }else{
            d.getElementById("app_div").innerHTML = "Gratu kész, score: "+score+"/"+max;
            d.getElementById("submit").innerHTML = "Nyomtatás";
               
        }
    }
    function loadNextApp(){
        //Cleaning the div
        d.getElementById("app_div").innerHTML = "";
        //running the createInput of the next app
        eval(apps[currApp]+".createInput(d.getElementById('app_div'))");
    }
</script>