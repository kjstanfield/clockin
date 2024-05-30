//On Load
window.onload = function () {
  reset();
};

//Check and report most recent status
function reset() {
  const apiUrl = "https://n8n.kjlab.io/webhook/clockin";
  const params = new URLSearchParams({ type: "check" });

  fetch(`${apiUrl}?${params.toString()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      let current_status = data.status;
      let status_time = data.time_in;

      console.log("status", current_status);

      //Check current status and update div
      if (current_status == "in") {
        document.getElementById("status").innerText = "Status: In Use";
        document.getElementById("time").innerText = `Since: ${status_time}`;
        document.getElementById("clock-btn").innerText = `CLOCK OUT`;
        document.getElementById("status").classList.remove("free");
        document.getElementById("status").classList.add("inuse");
      } else {
        document.getElementById("status").innerText = "Status: Free";
        document.getElementById("time").innerText = `Since: ${status_time}`;
        document.getElementById("clock-btn").innerText = `CLOCK IN`;
        document.getElementById("status").classList.remove("inuse");
        document.getElementById("status").classList.add("free");
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

//Button Press
document.getElementById("clock-btn").addEventListener("click", function () {
  const apiUrl = "https://n8n.kjlab.io/webhook/clockin";
  let action = "null";

  if (document.getElementById("clock-btn").innerText == `CLOCK OUT`) {
    action = "out";
  } else {
    action = "in";
  }

  let params = new URLSearchParams({ type: `${action}` });

  fetch(`${apiUrl}?${params.toString()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      reset();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
