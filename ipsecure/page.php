
<!DOCTYPE html>
<html>
<head>
	<title>Ip secure</title>
		<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css" />
<link rel="stylesheet" href="css/uikit.css" />

<!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit-icons.min.js"></script>

</head>
<body>
<div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-width-1-2@m uk-align-center ">
   <center> <h3 class="uk-card-title">MyBlackList</h3>
   	
	<?php
include 'ip.php';

$b = "246154631562562364565";

if(isset($_SESSION['IP']) AND $_SERVER['REMOTE_ADDR'] == $_SESSION['IP'] or $_SESSION['Vl'] !== $b) 

{
 echo "<center>";
 echo "<p>Statut: non verifié</p>";
 echo "</br>";
 echo "Redirection dans 1s";
 echo "</center>";
 header( "refresh:1;url=index.php" );

}


else
{
   echo "<center>";
	echo "<p>Statut : validé</p>";
	echo "</center>";
}

?>
</div>
</h1>
</body>
</html>