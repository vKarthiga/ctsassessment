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
}

const events = [
  new Event(1, "Music Concert", "2025-06-15", 3, "Music"),
  new Event(2, "Baking Workshop", "2025-07-01", 2, "Workshop"),
  new Event(3, "Art Exhibition", "2025-05-20", 0, "Art"),
  new Event(4, "Jazz Night", "2025-07-05", 5, "Music")
];

let filteredEvents = events;

const eventsContainer = document.querySelector("#eventsContainer");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

// Render Events
function renderEvents() {
  eventsContainer.innerHTML = "";

  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const name = document.createElement("div");
    name.className = "event-name";
    name.textContent = event.name;

    const date = document.createElement("div");
    date.textContent = `Date: ${event.date.toDateString()}`;

    const seats = document.createElement("div");
    seats.textContent = `Seats available: ${event.seats}`;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats === 0;

    // 👉 onclick event for register
    registerBtn.onclick = () => {
      if (event.register()) {
        alert(`Registered for ${event.name}!`);
        renderEvents();
      } else {
        alert("Event is full!");
      }
    };

    card.appendChild(name);
    card.appendChild(date);
    card.appendChild(seats);
    card.appendChild(registerBtn);

    eventsContainer.appendChild(card);
  });
}

// 👉 onchange event for filtering
categoryFilter.onchange = () => {
  const selected = categoryFilter.value;
  filteredEvents = events.filter(e => !selected || e.category === selected);
  renderEvents();
};

// 👉 keydown event for search
searchInput.addEventListener("keydown", () => {
  const keyword = searchInput.value.toLowerCase();
  filteredEvents = events.filter(e => e.name.toLowerCase().includes(keyword));
  renderEvents();
});

// Initial Render
renderEvents();
