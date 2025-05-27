document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log("Form submission started");

  const form = e.target;

  const formData = {
    name: form.name.value,
    email: form.email.value,
    event: form.event.value
  };

  console.log("Collected formData:", formData); // 👈 Check what's being sent

  const messageBox = document.getElementById('responseMessage');
  messageBox.textContent = 'Submitting...';

  setTimeout(() => {
    console.log("Sending fetch request...");
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      console.log("Response received:", response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("Data returned from API:", data);
      messageBox.textContent = `Success! Thank you, ${formData.name}.`;
      form.reset();
    })
    .catch(error => {
      console.error("Fetch error:", error);
      messageBox.textContent = 'Error: Unable to submit form.';
    });
  }, 1500);
});
