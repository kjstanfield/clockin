document.getElementById("clock-btn").addEventListener("click", function () {
  const apiUrl =
    "https://n8n.kjlab.io/webhook/3ee224f4-35ef-4541-b264-6e4ff8d40c40"; // Replace with your API URL

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
