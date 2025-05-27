document.getElementById("eventForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  // Get form elements
  const form = e.target;
  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const event = form.elements["event"].value;

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("eventError").textContent = "";

  let valid = true;

  // Validation
  if (!name) {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  if (!email || !email.includes("@")) {
    document.getElementById("emailError").textContent = "Valid email required.";
    valid = false;
  }

  if (!event) {
    document.getElementById("eventError").textContent = "Please select an event.";
    valid = false;
  }

  // Submit if valid
  if (valid) {
    alert(`Thanks ${name}, you've registered for the ${event} event!`);
    form.reset();
  }
});
