<?php
session_start();
require("connect.php");
$d = array();

if(!isset($_SESSION["pseudo"]) || empty($_SESSION["pseudo"]) || !isset($_POST["action"])) {
    $d["erreur"] = "vous devew etre conecter pour utiliser le tchat";
}
else{

    extract($_POST);
    $pseudo = $_SESSION["pseudo"];
    /** 
    /* Action : addMessage
    /* Permet l'ajout d'un message
    **/
    if($_POST["action"] == "addMessage" && strlen($message) >= 10){
        $message = $message;
        $sql = "INSERT INTO messages(pseudo,message,date) VALUES ('$pseudo','$message',".time().")";
        $pdo->query($sql);
        $d["erreur"] = "ok";
    }

    /** 
    /* Action : getMessages
    /* Permet l'affichage des dernier message
    **/
    if($_POST["action"] == "getMessages"){
        $lastid = floor($lastid);
        $sql = "SELECT * FROM messages WHERE id>$lastid ORDER BY date ASC";
        $req = $pdo->query($sql);
        $d["result"] = "";
        $d["lastid"] = $lastid;
        while($data = $req->fetch(PDO::FETCH_ASSOC)){
            $d["result"] .= '<p><strong>'.$data["pseudo"].'</strong> : '.htmlentities($data["message"]).'</p>';
            $d["lastid"] = $data["id"];
        }
        $d["erreur"] = "ok";
    }

}



echo json_encode($d);
?>