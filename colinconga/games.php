<!DOCTYPE html>
<html>
	<head>
		<title>Colin Site</title>
		<script src="<script https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<link rel="stylesheet" type="text/css" href="style.css">
		<style>
		    #art {
			font-size: 200%;
			text-align: center;
			margin: 1%;
			padding: 1%;
		    }
		</style>
	</head>
	<body>
		<script>
            $(document).ready(function(){
                $.ajaxSetup({cache:false});
                $("#navcontain").load("nav.php");
			});
		</script>
		<div id="navcontain">
		</div>
		<br><br><br>
		<h2>Some games created by my friends and I<br>Caution: not guaranteed to be fun</h2>
		<br>
		<a href="YHNFS.php"><div id="game">YHNFS (You Have No Friends Simulator)<br><p>a text-based simulator</p></div></a>
	</body>
</html>
