A. Using .then() and .catch()

const eventsContainer = document.getElementById("eventsContainer");
const spinner = document.getElementById("spinner");

function fetchEventsThen() {
  spinner.style.display = "block";

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(response => response.json())
    .then(data => {
      renderEvents(data);
      spinner.style.display = "none";
    })
    .catch(error => {
      spinner.textContent = "Failed to load events.";
      console.error("Error fetching events:", error);
    });
}

function renderEvents(events) {
  eventsContainer.innerHTML = "";
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `<h3>${event.title}</h3><p>${event.body}</p>`;
    eventsContainer.appendChild(card);
  });
}

// fetchEventsThen(); // Uncomment to test this version

B. Using async/await

async function fetchEventsAsync() {
  spinner.style.display = "block";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    renderEvents(data);
  } catch (error) {
    spinner.textContent = "Error loading events.";
    console.error("Async error:", error);
  } finally {
    spinner.style.display = "none";
  }
}

fetchEventsAsync(); // Active version
