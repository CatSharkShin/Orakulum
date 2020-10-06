<script>
    var d = document;
    class CheckTest{
        static createInput(app){
        $('#checkbox').change(function() {
                var isChecked = $(this).is(':checked');
                if (isChecked) {
                    if(Math.random() < 0.8)
                        $(this).prop("checked", false);
                }
            });
        }
        static checkInput(app){
            var isChecked = d.getElementById("checkbox").checked;
            if(isChecked)
                return {max: 1,score:1}
            return {max: 1,score:0}
        }
    }
</script>