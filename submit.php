<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $agree = $_POST["agree"];

    // create a new row in the CSV file with the form data
    $file = fopen("form-data.csv","a");
    fputcsv($file, array($name, $email, $subject, $message, $agree));
    fclose($file);
}
?>
