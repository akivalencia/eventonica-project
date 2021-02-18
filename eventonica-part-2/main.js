/**
 * Add all your DOM event handlers and other UI code in this file.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();

  // Builds HTML list for all event. You must call this function after you
  // change, add, or remove any events.
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = Event.all_events
      .map((event) => `<li>${event.title}</li>`)
      .join("\n");
  };

//for users list
  const refreshEventsList2 = () => {
    document.querySelector("#users-list").innerHTML = User.all_users
      .map((user) => `<li>${user.first_name, user.last_name}</li>`)
      .join("\n");
  };

  const addUserForm = document.querySelector("#add-user");
  addUserForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const first_name = document.querySelector("#add-user-name").value;
    const last_name = document.querySelector("#add-event-date").value;
    const organizer = document.querySelector("#add-event-organizer").value;
    //grab above


    const user = app.addUser(first_name, last_name, email);
    console.log("Added user", user);
    refreshEventsList();
    addUserForm.reset();
  });




  const addEventForm = document.querySelector("#add-event");

  // Handle add event form submit by calling our instance of Eventonica, `app`
  addEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const name = document.querySelector("#add-event-name").value;
    const date= document.querySelector("#add-event-date").value;
    const organizer = document.querySelector("#add-event-organizer").value;
    const description= document.querySelector("#add-event-description").value;
    const category = document.querySelector("#add-event-category").value;
    //grab above
    
    const event = app.addEvent(name, date, organizer, description, category);
    console.log("Added event", event);
    refreshEventsList();
    addEventForm.reset();
  });
});
