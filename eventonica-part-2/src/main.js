/**
 * d
 * Add all your DOM event handlers and other UI code in this file.
 */




document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();
  app.addEvent('abc', '09/28/2021', 'brie','something', 'party');
  app.addUser('Yajaira');
  app.addUser('Brittany');
  app.addUser('Tanisha');
  app.addUser('Kuma');





  // Builds HTML list for all event. You must call this function after you
  // change, add, or remove any events.
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = Event.all_events
      .map((event) => `<li>${event.title}, ${event.date} ${event.id}</li>`)
      .join("\n");
  };
  refreshEventsList();
//for users list
  const refreshUsersList = () => {
    document.querySelector("#users-list").innerHTML = User.all_users
      .map((user) => `<li>${user.name}, ${user.id}</li>`)
      .join("\n");
  };
  refreshUsersList();

  const addUserForm = document.querySelector("#add-user");
  addUserForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const name = document.querySelector("#add-user-name").value;
    const email = document.querySelector("#add-user-email").value;
    //grab above


    const user = app.addUser(name, email);
    console.log("Added user", user);
    refreshUsersList();
    addUserForm.reset();

  });
//delete user
  const deleteUserForm = document.querySelector("#delete-user");
  deleteUserForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const id = document.querySelector("#delete-user-id").value;
    //grab above


    const user = app.deleteUser(id);
    alert("delete user"+ user);
    refreshUsersList();
    deleteUserForm.reset();

  });

  //delete event
  const deleteEventForm = document.querySelector("#delete-event");
  deleteEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const id = document.querySelector("#delete-event-id").value;
    //grab above


    const event = app.deleteEvent(id);
    alert("delete event"+ event);
    refreshEventsList();
    deleteEventForm.reset();

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

  //search event by date 

  // const refreshFindEventsList = (event) => {
  //   document.querySelector("#find-events-list").innerHTML = event
  //     .map((event) => `<li>${event.title}, ${event.date} ${event.id}</li>`)
  //     .join("\n");
  // };
  // const SearchEventForm = document.querySelector("#search");

  // // Handle add event form submit by calling our instance of Eventonica, `app`
  //   SearchEventForm.addEventListener("submit", (submitEvent) => {
  //   submitEvent.preventDefault();

  //date 
  //   const date= document.querySelector("#date-search").value;
  //   // const category = document.querySelector("#category-search").value;
  //   //grab above
    
  //   const event = app.findEventsByDate(date);
  //   // console.log("Added event", event);
  //   refreshFindEventsList(event);
  //   SearchEventForm.reset();
  // });




  //search event by category
  const refreshFindEventsList = (event) => {
    document.querySelector("#find-events-list").innerHTML = event
      .map((event) => `<li>${event.title}, ${event.date} ${event.id}</li>`)
      .join("\n");
  };
   const SearchEventForm = document.querySelector("#search");

  // Handle add event form submit by calling our instance of Eventonica, `app`
    SearchEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const date= document.querySelector("#date-search").value;
    const category = document.querySelector("#categories").value;
    console.log(category);
    //grab above
    
    const event = app.findEventsbyCategoryandDate(category, date);
    console.log(event);
    // console.log("Added event", event);
    refreshFindEventsList(event);
    SearchEventForm.reset();

  });














  
});
