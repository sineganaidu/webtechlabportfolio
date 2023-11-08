<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $review = $_POST["review"];
    if (!empty($review)) {
        $reviewFile = fopen("reviews.txt", "a");
        fwrite($reviewFile, $review . "\n");
        fclose($reviewFile);
        // You can add additional processing or validation here if needed.
    }
}
?>
