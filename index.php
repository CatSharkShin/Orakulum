<!DOCTYPE html>
<?php 
    require "private/config.php";
 ?>

<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <title>Orákulum</title>
</head>

<body>
    
    <div style="text-align:center">
        <h3>Do what you are told to do</h3>
        <div id="app_div">

        </div>
        <a onclick="nextApp(d.getElementById('app_div'))" id="submit">Next</a>
    </div>

    <?php 
            //The name of the class and the file it is in has to be the same.
            //HERE GOES YOUR CLASS NAME:
            $AppNames=[
                "GyakApp",
                "TestApp",
            ];


            foreach($AppNames as $app){
                require_once  JS.strtolower($app).".js";
            }
                require JS."app_controller.js";
    ?>
    <div id="test"></div>
    <script type="text/javascript">
        var apps = <?php echo json_encode($AppNames) ?>;
        var currApp = 0;
        var score = 0;
        var max = 0;
        loadNextApp(d.getElementById('app_div'));
    </script>
</body>
</html>