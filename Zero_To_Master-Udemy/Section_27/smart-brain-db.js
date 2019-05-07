// Terminal
~ postgres -D /usr/local/var/postgres  // invocate database directory
// open new tab in terminal
~ createdb 'smart-brain'
~ psql 'smart-brain'

// PSequel GUI
CREATE TABLE users (
  id serial PRIMARY KEY,                // incrementally asign PK
  name VARCHAR(100),                    // variable character length max
  email text UNIQUE NOT NULL,
  entries BIGINT DEFAULT 0,
  joined TIMESTAMP NOT NULL
);

CREATE TABLE login (
  id serial PRIMARY KEY,
  hash VARCHAR(100) NOT NULL,
  email text UNIQUE NOT NULL
);

// server.js terminal
ç
npm install knex
npm install pg
npm start

// server.js
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'breadcrumbs.2.satori',
    password : '',
    database : 'smart-brain'
  }
});

db.select('*').from('users');

//
app.post('/register', (req, res) => {
  const { email, name } = req.body;
  db('users').insert({
    email: email,
    name: name,
    joined: new Date()
  }).then(console.log);
  res.json(database.users[database.users.length-1]);
})

// Postman
POST localhost:3000/register 
{
	"email": "ann@gmail.com",
	"password": "apples",
	"name": "Ann"
}

// psql terminal
smart-brain=# SELECT * FROM users;
 id | name |     email     | entries |         joined
----+------+---------------+---------+------------------------
  1 | Ann  | ann@gmail.com |       0 | 2019-05-07 15:52:16.38
(1 row)

//
app.post('/register', (req, res) => {
  const { email, name } = req.body;
  return db('users')
    .returning('*')
    .insert({
      email: email,
      name: name,
      joined: new Date()
    })
    .then(response => {
      res.json(response);
    });
})

// Postman
POST localhost:3000/register 
{
	"email": "ann@gmail.com",
	"password": "apples",
	"name": "Ann"
}

// psql terminal
smart-brain=# SELECT * FROM users;
 id | name |     email      | entries |         joined
----+------+----------------+---------+-------------------------
  1 | Ann  | ann@gmail.com  |       0 | 2019-05-07 15:52:16.38
  2 | Anne | anne@gmail.com |       0 | 2019-05-07 15:59:59.239
(2 rows)

//
app.post('/register', (req, res) => {
  const { email, name } = req.body;
  return db('users')
    .returning('*')
    .insert({
      email: email,
      name: name,
      joined: new Date()
    })
    .then(user => {
      res.json(user[0]);
    })
    .catch(err => res.status(400).json(err))
})

// Postman
POST localhost:3000/register 
{
	"email": "john@gmail.com",
	"password": "cookies",
	"name": "John"
}
// Postman Response
[
  {
      "id": 3,
      "name": "John",
      "email": "john@gmail.com",
      "entries": "0",
      "joined": "2019-05-07T20:01:52.948Z"
  }
]

// Postman 2nd Attempt
POST localhost:3000/register 
{
	"email": "john@gmail.com",
	"password": "cookies",
	"name": "John"
}
// Postman Response
{
  "name": "error",
  "length": 206,
  "severity": "ERROR",
  "code": "23505",
  "detail": "Key (email)=(john@gmail.com) already exists.",
  "schema": "public",
  "table": "users",
  "constraint": "users_email_key",
  "file": "nbtinsert.c",
  "line": "535",
  "routine": "_bt_check_unique"
}

//
app.post('/register', (req, res) => {
  const { email, name } = req.body;
  return db('users')
    .returning('*')
    .insert({
      email: email,
      name: name,
      joined: new Date()
    })
    .then(user => {
      res.json(user[0]);
    })
    .catch(err => res.status(400).json('Unable to Register'))
})

// Front-End Register on App
Amy 
theamy@gmail.com
123

// psql terminal
smart-brain=# SELECT * FROM users;
 id | name |      email       | entries |         joined
----+------+------------------+---------+-------------------------
  1 | Ann  | ann@gmail.com    |       0 | 2019-05-07 15:52:16.38
  2 | Anne | anne@gmail.com   |       0 | 2019-05-07 15:59:59.239
  3 | John | john@gmail.com   |       0 | 2019-05-07 16:01:52.948
  5 | Amy  | theamy@gmail.com |       0 | 2019-05-07 16:10:37.112
(4 rows)

// prior to connecting db
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      return res.json(user);
    }
  })
  if (!found) {
    res.status(400).json('not found');
  }
})

// updated with knex
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  db.select('*').from('users').then(user => {
    console.log(user);
  })
  if (!found) {
    res.status(400).json('not found');
  }
})

// Postman
GET localhost:3000/profile/1
// Postman response
'not found'
// server.js terminal response
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
app is running on port 3000
[ { id: 1,
    name: 'Ann',
    email: 'ann@gmail.com',
    entries: '0',
    joined: 2019-05-07T19:52:16.380Z },
  { id: 2,
    name: 'Anne',
    email: 'anne@gmail.com',
    entries: '0',
    joined: 2019-05-07T19:59:59.239Z },
  { id: 3,
    name: 'John',
    email: 'john@gmail.com',
    entries: '0',
    joined: 2019-05-07T20:01:52.948Z },
  { id: 5,
    name: 'Amy',
    email: 'theamy@gmail.com',
    entries: '0',
    joined: 2019-05-07T20:10:37.112Z } ]

// server.js
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  let found = false;
  db.select('*').from('users').where({id})  
    .then(user => {
    console.log(user[0]);
  })
  if (!found) {
    res.status(400).json('not found');
  }
})

// Postman
GET localhost:3000/profile/1
// Postman response
'not found'
// server.js terminal response
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
app is running on port 3000
{ id: 1,
    name: 'Ann',
    email: 'ann@gmail.com',
    entries: '0',
    joined: 2019-05-07T19:52:16.380Z }

// server.js
app.get('/profile/:id', (req, res) => {
  const { id } = req.params;
  db.select('*').from('users').where({id})  
    .then(user => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('not found');
      }
  })
  .catch(err => res.status(400).json('error getting user'))
})

// prior to connecting db
app.put('/image', (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++
      return res.json(user.entries);
    }
  })
  if (!found) {
    res.status(400).json('not found');
  }
})

// server.js
app.put('/image', (req, res) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    console.log(entries);
  })
})

// Postman 
PUT localhost:3000/image
{
	"id": "1"
}

// server.js terminal
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
app is running on port 3000
[ '1' ]

// psql terminal
smart-brain=# SELECT * FROM users;
 id | name |      email       | entries |         joined
----+------+------------------+---------+-------------------------
  2 | Anne | anne@gmail.com   |       0 | 2019-05-07 15:59:59.239
  3 | John | john@gmail.com   |       0 | 2019-05-07 16:01:52.948
  5 | Amy  | theamy@gmail.com |       0 | 2019-05-07 16:10:37.112
  1 | Ann  | ann@gmail.com    |       1 | 2019-05-07 15:52:16.38
(4 rows)

// server.js
app.put('/image', (req, res) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
    .catch(err => res.status(400).json('unable to get entries'));
})

// Postman 
PUT localhost:3000/image
{
	"id": "1"
}
// Postman response
"2"

// psql terminal
smart-brain=# SELECT * FROM users;
 id | name |      email       | entries |         joined
----+------+------------------+---------+-------------------------
  2 | Anne | anne@gmail.com   |       0 | 2019-05-07 15:59:59.239
  3 | John | john@gmail.com   |       0 | 2019-05-07 16:01:52.948
  5 | Amy  | theamy@gmail.com |       0 | 2019-05-07 16:10:37.112
  1 | Ann  | ann@gmail.com    |       2 | 2019-05-07 15:52:16.38
(4 rows)

// prior to transaction between 'users' & 'login' db
app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  const hash = bcrypt.hashSync(password);
  return db('users')
    .returning('*')
    .insert({
      email: email,
      name: name,
      joined: new Date()
    })
    .then(user => {
      res.json(user[0]);
    })
    .catch(err => res.status(400).json(err))
})

// db.transaction
app.post('/register', (req, res) => {
  const { email, name, password } = req.body;
  const hash = bcrypt.hashSync(password);
  db.transaction(trx => {
    trx.insert({
      hash: hash,
      email: email
    })
    .into('login')
    .returning('email')
    .then(loginEmail => {
      return trx('users')
        .returning('*')
        .insert({
          email: loginEmail[0],
          name: name,
          joined: new Date()
        })
        .then(user => {
          res.json(user[0]);
        })
    })
    .then(trx.commit)
    .catch(trx.rollback)
  })
  .catch(err => res.status(400).json(err))
})

// Postman 
POST localhost:3000/register
{
	"email": "john1@gmail.com",
	"password": "cookies",
	"name": "John"
}
// Postman response
{
  "id": 6,
  "name": "John",
  "email": "john1@gmail.com",
  "entries": "0",
  "joined": "2019-05-07T21:14:17.932Z"
}

// psql terminal
smart-brain=# SELECT * FROM users;
 id | name |      email       | entries |         joined
----+------+------------------+---------+-------------------------
  2 | Anne | anne@gmail.com   |       0 | 2019-05-07 15:59:59.239
  3 | John | john@gmail.com   |       0 | 2019-05-07 16:01:52.948
  5 | Amy  | theamy@gmail.com |       0 | 2019-05-07 16:10:37.112
  1 | Ann  | ann@gmail.com    |       4 | 2019-05-07 15:52:16.38
  6 | John | john1@gmail.com  |       0 | 2019-05-07 17:14:17.932
(5 rows)

smart-brain=# SELECT * FROM login;
 id |                             hash                             |      email
----+--------------------------------------------------------------+-----------------
  1 | $2a$10$r4M.x/55jSjQfhvDBT6Mp.mNxXwbriafDcjX2.Vwa5H2cBQn9BqxW | john1@gmail.com
(1 row)

// signin prior to connecting db
app.post('/signin', (req, res) => {
  if (req.body.email === database.users[0].email &&
      req.body.password === database.users[0].password) {
    res.json(database.users[0]);
  } else {
    res.status(400).json('error logging in');
  }
})

// server.js
app.post('/signin', (req, res) => {
  db.select('email', 'hash').from('login')
    .then(data => {
      console.log(data);
    })
})

// Postman
POST localhost:3000/signin
{
	"email": "john@gmail.com",
	"password": "cookies"
}

// server.js terminal
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
app is running on port 3000
[ { email: 'john1@gmail.com',       // still returned regardless if email was correct
    hash:
     '$2a$10$r4M.x/55jSjQfhvDBT6Mp.mNxXwbriafDcjX2.Vwa5H2cBQn9BqxW' } ]

// server.js
app.post('/signin', (req, res) => {
  db.select('email', 'hash').from('login')
  .where('email', '=', req.body.email)
    .then(data => {
      console.log(data);
    })
})

// Postman
POST localhost:3000/signin
{
	"email": "john1@gmail.com",
	"password": "cookies"
}

// server.js terminal
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
app is running on port 3000
[ { email: 'john1@gmail.com',       // returned empty array without the '1'
    hash:
     '$2a$10$r4M.x/55jSjQfhvDBT6Mp.mNxXwbriafDcjX2.Vwa5H2cBQn9BqxW' } ]

// server.js
app.post('/signin', (req, res) => {
  db.select('email', 'hash').from('login')
  .where('email', '=', req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', req.body.email)
          .then(user => {
            console.log(user);
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
      }
    })
    .catch(err => res.status(400).json('wrong credentials'))
})

// Postman
POST localhost:3000/signin
{
	"email": "john1@gmail.com",
	"password": "cookies"
}
// Postman response
{
  "id": 6,
  "name": "John",
  "email": "john1@gmail.com",
  "entries": "0",
  "joined": "2019-05-07T21:14:17.932Z"
}

// server.js terminal
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
app is running on port 3000
[ { id: 6,
    name: 'John',
    email: 'john1@gmail.com',
    entries: '0',
    joined: 2019-05-07T21:14:17.932Z } ]

// server.js
app.post('/signin', (req, res) => {
  db.select('email', 'hash').from('login')
  .where('email', '=', req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      console.log(isValid);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', req.body.email)
          .then(user => {
            console.log(user);
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
      }
    })
    .catch(err => res.status(400).json('wrong credentials'))
})

// Postman register
POST localhost:3000/register
{
	"email": "eddy@gmail.com",
	"password": "hello",
	"name": "Eddy"
}
// Postman response
{
  "id": 7,
  "name": "Eddy",
  "email": "eddy@gmail.com",
  "entries": "0",
  "joined": "2019-05-07T21:39:12.810Z"
}
// Postman signin
POST localhost:3000/signin
{
	"email": "eddy@gmail.com",
	"password": "hello"
}
// Postman response
{
  "id": 7,
  "name": "Eddy",
  "email": "eddy@gmail.com",
  "entries": "0",
  "joined": "2019-05-07T21:39:12.810Z"
}

// server.js terminal
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
app is running on port 3000
true
[ { id: 7,
    name: 'Eddy',
    email: 'eddy@gmail.com',
    entries: '0',
    joined: 2019-05-07T21:39:12.810Z } ]

// psql terminal
smart-brain=# SELECT * FROM users;
 id | name |      email       | entries |         joined
----+------+------------------+---------+-------------------------
  2 | Anne | anne@gmail.com   |       0 | 2019-05-07 15:59:59.239
  3 | John | john@gmail.com   |       0 | 2019-05-07 16:01:52.948
  5 | Amy  | theamy@gmail.com |       0 | 2019-05-07 16:10:37.112
  1 | Ann  | ann@gmail.com    |       4 | 2019-05-07 15:52:16.38
  6 | John | john1@gmail.com  |       0 | 2019-05-07 17:14:17.932
  7 | Eddy | eddy@gmail.com   |       0 | 2019-05-07 17:39:12.81
(6 rows)

smart-brain=# SELECT * FROM login;
 id |                             hash                             |      email
----+--------------------------------------------------------------+-----------------
  1 | $2a$10$r4M.x/55jSjQfhvDBT6Mp.mNxXwbriafDcjX2.Vwa5H2cBQn9BqxW | john1@gmail.com
  2 | $2a$10$uJdYEt0421CNC5EuHCK/welhQ7IGGpjSzhibj4U0dyKCjI4.6QJHi | eddy@gmail.com
(2 rows)

// server.js
app.post('/signin', (req, res) => {
  db.select('email', 'hash').from('login')
  .where('email', '=', req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', req.body.email)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
      } else {
        res.status(400).json('wrong credentials');
      }
    })
    .catch(err => res.status(400).json('wrong credentials'))
})

// Postman signin
POST localhost:3000/signin
{
	"email": "eddy@gmail.com",
	"password": "hell"            // wrong password
}
// Postman response
"wrong credentials"