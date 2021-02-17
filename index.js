class Eventonica {
    addEvent(title, date, organizer, description, category) {
    let newEvent= new Event(title, date, organizer, description, category);
      // Adds a new Event
    }
    updateEvent(id, name, key, change) {
      // Update existing Event
      //search id 
      //value 
      //change key 
      //change value --> key value pairs 
      //map or filter methods 
    }
  
    deleteEvent(id) {
      // Deletes Event
      for (let i=0; i<Event.all_users.length; i++) {
        if (Event.all_events[i].id === id){
         Event.all_events.splice(i,1);// what truly is this splice shit doing 

       }
     }   
   }

  
    findEventsByDate(date) {
      // Return items in Event.all with a specified date
      //use filter method--> that honeslty seems like the easiest thing to do 
      //let item = event.all_event[i] == one event in the array 
      //event.all_event[i]["date"] ; the date key/ property
      //if event.all_event[i]["date"]=== date 
    //   return item ;

      

       }
    }
  
    findEventsbyCategory(category) {
      // Return items in Event.all with a specified category
      //use filter method
    }
  
    addUser(id) {
      // Adds a new User
        let newUser= new User(id, first_name, last_name, email, category, password);
          // Adds a new Event
        }
      //pops the user from the array 
    }
  
    updateUser(id, name, key, change) {
        // Update existing Event
        //search id 
        //value 
        //change key 
        //change value --> key value pairs 
        //map or filter methods 

    }
  
    deleteUser(id) {
      // Deletes User
    for (let i=0; i<User.all_users.length; i++) {
         if (User.all_users[i].id === id){
          User.all_users.splice(i,1);// what truly is this splice shit doing 

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
    static all_events = [];
    static _nextId = 100;
  
    constructor(title, date, organizer, description, category) {
      this.id = Event._nextId++;
      // decide what properties are required
      this.title= title;
      this.date= date;
      this.organizer= organizer;
      this.description= description;
      this.category= category;
      Event.all_events.push(this); // keep track of all created instances
    }
  
    static findByDate() {
      return [];
    }
  
    static findByCategory() {
      return [];
    }
  }
  
  class User {
    static all_users= [];
    static _nextId = 200;
  


    constructor() {
      this.id = User._nextId++;
      this.first_name= first_name;
      this.last_name= last_name;
      this.email= email;
      this.category= category;
      this.password= password;

      // decide what properties are required on an instance
      User.all_users.push(this); // keep track of all created instances
    }
  }

// //can create categories in general whether it's favorite or not
//  class Category{
//     constructor(){
//         this.name= name;
//     }

//  }
