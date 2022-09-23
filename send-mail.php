<?php
if(isset($_POST['submit'])){
    $nombre = $_POST['name'];
    $telefono = $_POST['telephone'];
    $email = $_POST['email'];
    $motivo = $_POST['consultation'];
    $detalles = $_POST['consult'];

    $header = 'From: ' . $email . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
    $mensaje .= "Su e-mail es: " . $email . " \r\n";
    $mensaje .= "Su teléfono es: " . $telefono . " \r\n";
    $mensaje .= "Motivo de la consulta: " . $motivo . " \r\n";
    $mensaje .= "Más detalles sobre la consulta: " . $detalles . " \r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    // $para = 'powell.cba.page@gmail.com';
    $para = 'danielpowell.estudio@gmail.com';
    $asunto = 'Mensaje de la página del estudio';

    mail($para, utf8_decode($asunto), utf8_decode($mensaje), $header);

    header("Location:./index.html");
}
?>