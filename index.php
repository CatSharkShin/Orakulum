<!DOCTYPE html>
<?php 
    require "private/config.php";
 ?>

<html>
<head>    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
    <title>Orákulum</title>

    <!--
            body{
            margin: 25px;
            width: 95%;
            border: #37A3D2;
            border-width:5px;  
            border-style:outset;
            color: #0C3683 !important;
            font-size: 18px;
            }
    -->

    <style>
    .bg-secondary{
        background-color: #8BE2E5 !important;
    }
    h3{
        color: #17B5A5 !important;
    }
    div{
        padding-bottom: 50px;
        padding-top: 50px;
    }
    body{
        margin: 25px;
        width: 95%;
        border: #37A3D2;
        border-width:5px;  
        border-style:outset;
    }
    </style>

</head>

<body class="bg-secondary">
    
    <div class="text-center">
        <h3>Do what you are told to do</h3>
        <div id="app_div">

        </div>
        <button type="button" class="btn btn-outline-info" onclick="nextApp(d.getElementById('app_div'))" id="submit">Next</button>
    </div>

    <?php 
            //The name of the class and the file it is in has to be the same.
            //HERE GOES YOUR CLASS NAME:
            $AppNames=[
                "CheckTest",
                "CheckerApp",
                "KepvalasztasApp",
                "TargykeprolvalasztasApp",
                "MatekmuveletApp"
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
        var species = "human";
        loadNextApp(d.getElementById('app_div'));
    </script>
</body>
</html>