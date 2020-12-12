

<?php
include 'ip.php';


if ($_SERVER['REMOTE_ADDR'] == $IP ) {
include 'bloquer.php';
}
else
{
$P = "8";

$_SESSION['Vl'] = '246154631562562364565';
header( "refresh:3;url=page.php" );


}


?>

<!DOCTYPE html>
<html>
<head>
	<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css" />
<link rel="stylesheet" href="css/uikit.css" />

<!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit-icons.min.js"></script>

	<title>ESTEMAZDEV</title>
</head>
<body>

<div>
	
</div>

<div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-width-1-2@m uk-align-center ">
   <center> <h3 class="uk-card-title">MyBlackList</h3>
    <p>Redirection dans 3s</p></center>
</div>
<center> <div uk-spinner="ratio: 3"></div></center>
</body>


</html>