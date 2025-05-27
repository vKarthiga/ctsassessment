document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: form.name.value,
    email: form.email.value,
    event: form.event.value
  };

  // Simulate delay before sending fetch
  document.getElementById('responseMessage').textContent = 'Submitting...';

  setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response error');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('responseMessage').textContent = `Success! Thank you, ${formData.name}.`;
      form.reset();
    })
    .catch(error => {
      document.getElementById('responseMessage').textContent = 'Error: Unable to submit form.';
      console.error(error);
    });
  }, 1500); // Simulated 1.5s delay
});
