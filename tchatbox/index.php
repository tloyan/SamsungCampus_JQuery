<?php
if(!empty($_POST) && isset($_POST["pseudo"]) && !empty($_POST["pseudo"])) {
  session_start();
  $_SESSION["pseudo"] = $_POST["pseudo"];
  header("location:tchat.php");
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <link rel="stylesheet" href="theme/style.css" type="text/css" media="screen" />
</head>

<body>
  <div id="conteneur">
    <h1>Mon tchat</h1>
  <?php if(isset($erreur)){ echo "<p>$erreur</p>"; }?>
    <form action="index.php" method="post">
	Pseudo : <input type="text" name="pseudo"/>
	<input type="submit" value="tchatter"/>
    </form>
  </div>
</body>
</html>