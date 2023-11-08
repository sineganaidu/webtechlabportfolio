// script.js

// Function to submit a review
function submitReview() {
  var review = document.getElementById("review").value;

  if (review.trim() !== '') {
      // Create a FormData object to send the review data
      var formData = new FormData();
      formData.append("review", review);

      // Send the review data to the server using a POST request
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "submit_review.php", true);

      xhr.onload = function () {
          if (xhr.status == 200) {
              alert("Review submitted successfully.");
              // You can update the user interface or perform additional actions here if needed.
          }
      };

      xhr.send(formData);
  } else {
      alert("Please enter a review before submitting.");
  }
}
