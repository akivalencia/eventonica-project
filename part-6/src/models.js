/**
 * paste index.js into model.js in order for this to work
 * Paste your code from Part 1 into this file but keep the module check at the very end.
 * (The following is a just a small subset for the Add Event form on the example page to work)
 */
class Eventonica {
  //add a fieldset per parameter so people can add all of these
      addEvent(title, date, organizer, description, category) {
      let newEvent= new Event(title, date, organizer, description, category);
       console.log(newEvent);
  
        // Adds a new Event
      }
      updateEvent(id, key, change) {
          // // for (let i=0;i <Event.all_events.length; i++){
          //    if (Event.all_events[i].id === id) {
          //        Event.all_events[i].key = change;
          //    }
          let index= Event.all_events.map(event=> event.id).indexOf(id);
          // console.log(Event.all_events.map(event=>event.id));
          // console.log(index);
           Event.all_events[index][key] = change;
  
  
        // Update existing Event
        //search id 
        //value 
        //change key 
        //change value --> key value pairs 
        //map or filter methods 
      }
    
      deleteEvent(id) {
        // Deletes Event
        id = parseInt(id);
        let index= Event.all_events.map(event=> event.id).indexOf(id);
        console.log('will delete this'+ index);
        if(index<0){
          console.log("This event is not in the system yet");
        }else {
            Event.all_events.splice(index,1);//  
  
          }
        }   
        
  
    
      findEventsByDate(date) {
        // Return items in Event.all with a specified date
        //use filter method--> that honeslty seems like the easiest thing to do 
        //let item = event.all_event[i] == one event in the array 
        //event.all_event[i]["date"] ; the date key/ property
        //if event.all_event[i]["date"]=== date 
      //   return item ;
      // '09/28/2021'
      return Event.findByDate(date);
        
  
         
      }
    
      findEventsbyCategory(category) {
        // Return items in Event.all with a specified category
        return Event.findByCategory(category);
      }

      findEventsbyCategoryandDate(category, date){
        let categorylist= Event.findByCategory(category); //return list with same event category
        console.log(categorylist);
        let filtered= categorylist.filter( (filterItem) => filterItem.date === date)
        console.log(filtered);
        return filtered;

      }


    
  
      addUser(first_name, last_name, email) {
        // Adds a new User
          let newUser= new User(first_name, last_name, email);
            // Adds a new Event
      }
    
      updateUser(id, key, change) {
          // Update existing Event
          //search id 
          //value 
          //change key 
          //change value --> key value pairs 
          //map or filter methods 
          let index= User.all_users.map(user=> user.id).indexOf(id);
          // console.log(Event.all_events.map(event=>event.id));
          // console.log(index);
           User.all_users[index][key] = change;
  
  
      }
    
      deleteUser(id) {
        // Deletes User
        //id is a string so must make into a num 
        id= parseInt(id);
        let index= User.all_users.map(user=> user.id).indexOf(id);
        if(index<0){
          console.log("This user is not in the system yet");
        }else {
             User.all_users.splice(index,1);// what truly is this splice shit doing 
  
          }
        }   
      
  
  
  
    }//end of the eventonica class
    
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
    
      static findByDate(date) {
        let dates=[];
        for (let i=0; i<this.all_events.length; i++){
          if(this.all_events[i].date=== date){
            dates.push(this.all_events[i])
          }
        }
        return dates;
      }
    
      static findByCategory(category) {
        let categories=[];
        for (let i=0; i<this.all_events.length; i++){
          if (this.all_events[i].category===category){
            categories.push(this.all_events[i])
          }
        }
        return categories;
      }


    }
    
    class User {
      static all_users= [];
      static _nextId = 200;
    
  
  
      constructor(name, email) {
        this.id = User._nextId++;
        this.name = name;
        this.email= email;
      //   this.category= category;
        // this.password= password;
  
        // decide what properties are required on an instance
        User.all_users.push(this); // keep track of all created instances
      }
    }
  
  
  //damn should really make a jasmine test instead of just doing this
  //testing code 
  // event = new Eventonica();
  // console.log(event.addEvent('abc', '09/28/2021', 'brie','something', 'party'));
  // console.log(event);
  // event.updateEvent(100, 'title', 'def');
  // console.log(event);
  // console.log(Event.all_events);
  // event.addUser('Yajaira');
  // event.addUser('Brittany');
  // event.addUser('Tanisha');
  // event.addUser('Kuma');
  // console.log(User.all_users);
  // //can create categories in general whether it's favorite or not
  //  class Category{
  //     constructor(){
  //         this.name= name;
  //     }
  
  //  }
  
  // new Event('Example event');
  // new User('Alex');


  let alex= new User('Alex');



if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event, alex };
}
