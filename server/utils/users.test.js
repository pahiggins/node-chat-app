var expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Peter',
      room: 'Room A'
    }, {
      id: '2',
      name: 'John',
      room: 'Room A'
    }, {
      id: '3',
      name: 'Mary',
      room: 'Room B'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Peter',
      room: 'Room A'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should get a user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not get a user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for Room A', () => {
    var userList = users.getUserList('Room A');

    expect(userList).toEqual(['Peter', 'John']);
  });

  it('should return names for Room B', () => {
    var userList = users.getUserList('Room B');

    expect(userList).toEqual(['Mary']);
  });
});
