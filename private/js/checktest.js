<script>
    var d = document;
    class CheckTest{
        static createInput(app){
        //Change event:
        //If it is checked, generate a random number
        //If it's under 0.8, uncheck the checkbox
        $('#checkbox').change(function() {
                var isChecked = $(this).is(':checked');
                if (isChecked) {
                    if(Math.random() < 0.8)
                        $(this).prop("checked", false);
                }
            });
        }
        static checkInput(app){
            //Checking if the checkbox is checked
            var isChecked = d.getElementById("checkbox").checked;
            if(isChecked)
                return {max: 1,score:1}
            return {max: 1,score:0}
        }
    }
</script>