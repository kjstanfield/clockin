//On Load
// window.onload = function () {
//   const apiUrl =
//     "https://n8n.kjlab.io/webhook/3ee224f4-35ef-4541-b264-6e4ff8d40c40";

//   fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Success:", data);
//       current_status = data.in;
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });

//   // Update the text in the div
//   document.getElementById("status").innerText = `Status ${status}`;
// };

//Button Press
document.getElementById("clock-btn").addEventListener("click", function () {
  const apiUrl =
    "https://n8n.kjlab.io/webhook/3ee224f4-35ef-4541-b264-6e4ff8d40c40";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      let current_status = data.in;
      console.log(current_status);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
