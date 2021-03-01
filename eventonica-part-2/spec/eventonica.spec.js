
//imported everything
//commented out all fake data from model
//why sometimes 1 error sometimes 0 erros?????

const {Eventonica,User,Event}= require('../src/models.js');
const app= new Eventonica();
app.addEvent('Bday Party', '2021-09-28', 'Adi', 'a good time', 'party'); //100
app.addUser('Abby','abby@gmail.com'); //200


//testing add event

describe('add event', function () {
    it('containing 0 events should add one event to eventall array', function () {
      console.log(Event.all_events.length);
      expect(Event.all_events.length == 1).toBe(true);
    });
  });

//testing delete event 
  describe('delete event from eventall array', function () {
    it('removes id event from the eventallarray', function () {
        app.deleteEvent('100'); //had to be a string bc parseint 
      expect(Event.all_events.length == 0).toBe(true);
    });
  });



  //testing add user

describe('add user', function () {
    it('containing 0 users should add a user to userall', function () {
      console.log(User.all_users.length);
      expect(User.all_users.length == 1).toBe(true);
    });
  });

//testing delete user
  describe('delete user from user array', function () {
    it('removes id event from the eventallarray', function () {
        app.deleteUser('200');
      expect(User.all_users.length == 0).toBe(true);
    });
  });





