<?php
session_start();
if(!isset($_SESSION["pseudo"]) || empty($_SESSION["pseudo"])) {
	header("location:index.php");
}
include "connect.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <link rel="stylesheet" href="theme/style.css" type="text/css" media="screen" />
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/tchat.js"></script>
  <script type="text/javascript">
  	<?php
  		$sql = "SELECT id FROM messages ORDER BY id DESC LIMIT 1";
  		$req = $pdo->query($sql) or die(print_r($pdo->errorInfo()));
  		$data = $req->fetch(PDO::FETCH_ASSOC);
  	?>
  	var lastid = <?php echo $data["id"]; ?>
  </script>
</head>

<body>
  <div id="conteneur" style="width:94%; margin-bottom:200px;">
    <h1>Mon tchat, connectez en tant que <?php echo $_SESSION["pseudo"]; ?></h1>
    <div id="connected">
	
    </div>
    <?php
    $sql = "SELECT * FROM messages ORDER BY date DESC LIMIT 15";
    $req = $pdo->query($sql) or die(print_r($pdo->errorInfo()));
    $d = array();
    while($data = $req->fetch(PDO::FETCH_ASSOC)) {
    	$d[] = $data;
    }
    for ($i=count($d)-1;$i>=0;$i--){
    ?>
    	<p><strong><?php echo $d[$i]["pseudo"];?></strong> : <?php echo htmlentities($d[$i]["message"]);?></p>
    <?php
    }
    ?>
    <div id="tchat">
    </div>
  </div>
  
  <div id="tchatForm" style="position:fixed;bottom:0;width:100%;">
       <form method="post" action="#">
	  <div style="margin-right:110px;">
	      <textarea name="message" style="width:100%;"></textarea>
	  </div>
	  <div style="position:absolute; top:12px; right:0;">
	      <input type="submit" value="Envoyer"/>
	  </div>
	</form>      
  </div>
</body>
</html>