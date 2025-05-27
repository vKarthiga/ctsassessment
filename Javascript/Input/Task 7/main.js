class Event {
  constructor(id, name, date, seats, category) {
    this.id = id;
    this.name = name;
    this.date = new Date(date);
    this.seats = seats;
    this.category = category;
  }

  register() {
    if (this.seats > 0) {
      this.seats--;
      return true;
    }
    return false;
  }

  cancel() {
    this.seats++;
  }
}

const events = [
  new Event(1, "Music Concert", "2025-06-15", 3, "Music"),
  new Event(2, "Baking Workshop", "2025-07-01", 2, "Workshop"),
  new Event(3, "Art Exhibition", "2025-05-20", 0, "Art"),
];

// Reference to the container div
const eventsContainer = document.querySelector("#eventsContainer");

function renderEvents() {
  eventsContainer.innerHTML = ""; // Clear previous content

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const name = document.createElement("div");
    name.className = "event-name";
    name.textContent = event.name;

    const date = document.createElement("div");
    date.className = "event-date";
    date.textContent = event.date.toDateString();

    const seats = document.createElement("div");
    seats.textContent = `Seats available: ${event.seats}`;

    // Register button
    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats === 0;

    registerBtn.addEventListener("click", () => {
      if (event.register()) {
        alert(`Registered for ${event.name}!`);
        renderEvents(); // Update UI after registration
      } else {
        alert("Sorry, no seats available!");
      }
    });

    // Cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel Registration";
    cancelBtn.disabled = event.seats === 3; // assuming max seats is 3 for demo

    cancelBtn.addEventListener("click", () => {
      event.cancel();
      alert(`Registration cancelled for ${event.name}`);
      renderEvents(); // Update UI after cancellation
    });

    card.appendChild(name);
    card.appendChild(date);
    card.appendChild(seats);
    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);

    eventsContainer.appendChild(card);
  });
}

// Initial render
renderEvents();
