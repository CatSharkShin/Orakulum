<script>
    var d = document;
    class GyakApp{
        static checkInput(app){
            var text = d.getElementById("ize")
            if(text.value == "izé")
                return {max: 1,score:1}

            return {max: 1,score:0}
        }
    }
</script>