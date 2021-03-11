
//imported everything
//commented out all fake data from model
//why sometimes 1 error sometimes 0 erros?????
const {Eventonica,User,Event}= require('../src/models.js');
const app= new Eventonica();


//just look at Abby's test since we did them together and then copy and paste but for User 
//then those tests should definitely work 

describe('Event', function(){
  beforeEach(function(){
    const event = app.addEvent('Bday Party', '2021-09-28', 'Adi', 'a good time', 'party'); //

  })
  afterEach(function(){
    Event.all_events=[];
  })
  it("should add 1 event to array,", function(){
    expect(Event.all_events.length.toBe(1));
  })
  it('removes id event from the eventallarray', function () {
    app.deleteEvent('100'); //had to be a string bc parseint 
  expect(Event.all_events.length == 0).toBe(true);
});
}); 

})
//testing add event

// describe('add event', function () {
//   const {Eventonica,User,Event}= require('../src/models.js');
//   100
//   // app.addUser('Abby','abby@gmail.com'); //200
//     it('containing 0 events should add one event to eventall array', function () {
//       console.log(Event.all_events.length);
//       expect(Event.all_events.length == 1).toBe(true);
//     });
//   });

// //testing delete event 
//   describe('delete event from eventall array', function () {
//     it('removes id event from the eventallarray', function () {
//         app.deleteEvent('100'); //had to be a string bc parseint 
//       expect(Event.all_events.length == 0).toBe(true);
//     });
//   });



//   //testing add user

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





