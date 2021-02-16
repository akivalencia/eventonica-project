class Eventonica {
    addEvent(/* arguments you decide go here */) {
    let newEvent= new Event();
    
      // Adds a new Event
    }
  
    updateEvent() {
      // Update existing Event
    }
  
    deleteEvent(id) {
      // Deletes Event
    }
  
    findEventsByDate(date) {
      // Return items in Event.all with a specified date
    }
  
    findEventsbyCategory(category) {
      // Return items in Event.all with a specified category
    }
  
    addUser(id) {
      // Adds a new User
      //pops the user from the array 
    }
  
    updateUser() {
      // Update existing User
    }
  
    deleteUser(id) {
      // Deletes User
    for (let i=0; i<User.all.length; i++) {
         if (User.all[i].id === id){
          User.all.splice(i,1);

        }
      }   
    }


    favoriteEvent() {
        //favoritesEvent
    }

    unfavoriteEvent() {
        //undoes the favoriteEvent method
    }



  }
  
  class Event {
    static all = [];
    static _nextId = 100;
  
    constructor() {
      this.id = Event._nextId++;
      // decide what properties are required
      this.title= title;
      this.date= date;
      this.organizer= organizer;
      this.description= description;
      this.category= category;
      Event.all.push(this); // keep track of all created instances
    }
  
    static findByDate() {
      return [];
    }
  
    static findByCategory() {
      return [];
    }
  }
  
  class User {
    static all = [];
    static _nextId = 200;
  
    constructor() {
      this.id = User._nextId++;
      this.first_name= first_name;
      this.last_name= last_name;
      this.email= email;
      this.cateorgy= category;

      // decide what properties are required on an instance
      User.all.push(this); // keep track of all created instances
    }
  }

//can create categories in general whether it's favorite or not
 class Category{
    constructor(){
        this.name= name;
    }

 }
