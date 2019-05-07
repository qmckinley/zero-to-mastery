// terminal 
ls                      // lists everything in current Directory
pwd                     // present working Directory
cd                      // change Directory 
cd ..                   // brings one Directory up
cd /                    // root Directory
cd ~                    // user Directory
cd Desktop/test         // access test folder on Desktop
clear                   // clear Terminal
open .                  // opens folder currently in
mkdir folderName        // makes folder in current Directory
touch fileName.path     // creates file in current Directory
open fileName.path      // opens specific file in current Directory
open -a "appName"       // opens specific application
open -a "appName" fileName.path     // opens specific file in specific app
mv fileName.path newFileName.path   // change file name
rm newFileName.path                 // removes file
rm -r folerName                     // removes Directory or folder
say the computer speaks             // say "the computer speaks"

// brew
brew update             // update homebrew
brew doctor             // verify everything is working
brew cleanup 

// postgresql
initdb /directory       // create cluster or data directory
rm -rf /directory       // remove old database files (dangerous)
postgres -D /directory  // invocate database directory
createdb 'dbName'       // create database
psql 'dbName'           // invocate database
CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype);
\d                      // shows tables
\q                      // exits
INSERT INTO table_name (column_1, column_2, column_3) VALUES (value_1, value_2, value_3);
SELECT column_1, column_2, column_3 FROM table_name;
SELECT * FROM table_name;
ALTER TABLE table_name ADD column datatype;
UPDATE table_name SET some_column = some_value WHERE some_column = some_value;
UPDATE table_name SET some_column = some_value WHERE some_column = some_value OR  some_column = some_value;
SELECT * FROM table_name WHERE some_column LIKE 'A%';   // starting with 'A'
SELECT * FROM table_name WHERE some_column LIKE '%y';   // ending with 'y'
SELECT * FROM table_name WHERE some_column > some_value ORDER BY some_column;
SELECT * FROM table_name ORDER BY some_column DESC;     // sort by descending
SELECT * FROM table_name ORDER BY some_column ASC;      // sort by ascending
SELECT AVG(some_column) FROM table_name;
SELECT COUNT(some_column) FROM table_name;
SELECT MAX(some_column) FROM table_name;
SELECT SUM(some_column) FROM table_name GROUP BY some_column;
DELETE FROM table_name WHERE some_column = some_value;
DROP TABLE table_name;

CREATE TABLE login (
    ID serial NOT NULL PRIMARY KEY,
    secret VARCHAR (100) NOT NULL,
    name text UNIQUE NOT NULL
);

INSERT INTO login (secret, name) VALUES ('secretValue', 'nameValue');

SELECT * FROM users JOIN login ON users.name = login.name;
SELECT * FROM table_name1 JOIN table_name2 ON table_name1.column_name = table_name2.column_name;

// customize bash
nano ~/.bash_profile    // opens bash profile
source ~/.bash_profile  // reloads profile

// customize fish
fish_config                     // opens window to config
~/.config/fish/config.fish      // access profile
nano ~/.fish_profile            // opens bash profile
source ~/.fish_profile          // reloads profile

// git + github
// create repository / copy https://projectFilePath.git
git clone `https://projectFilePath.git` // download repository / minus back-tics
cd projectFilePath/                     // must be in a folder with a .git Directory
git status                              // check status of files
git add fileName.path                   // includes what will be committed
git add .                               // includes all files to be committed
git commit -m "updateDescription"       // committing changes to gitHub
git push                                // updates gitHub
git pull                                // pull the latest versions
git branch newBranch                    // starts a new branch
git checkout newBranch                  // switch to new branch
git checkout -b newBranch               // starts and switches to, newBranch
git merge master                        // merges master into your branch
git diff                                // see differences
git fetch upstream                      // fetch the branches and their respective commits
git remote -v                           // see current remote repository for your fork
git remote add upstream                 // 
git pull upstream master                //
git merge upstream/master               // merge changes from upstream/master to local master

// react.js
sudo                                    // admin persmission
npm install -g create-react-app         // global install / starter project
create-react-app `nameOfApp`            // minus back-tics
npm start                               // react-scripts start
npm run build                           // react-scripts build
npm test                                // react-scripts test --env=jsdom
npm run eject                           // react-scripts eject

git init
git remote add origin `https://github.com/qmckinley/awareness-is-key.git`
git push -u origin master

// node
process.exit()                          // exit node in terminal
node fileName                           // runs file
console.log(__dirname);                 // logs current directory
npm init -y                             // package.json -y = yes to everything
npm install nodemon --save-dev          // devDependencies just for developing
npm install express 
npm install body-parser 
npm install bcrypt-nodejs

const fs = require('fs')                // file system

fs.readFile('./dir', (err, data) => {   // read file - asynchronous
  if (err) {
    console.log('errrrrorrrr');
  }
  console.log(data.toString('utf8'));   // standard encoding
});

const file = fs.readFileSync('./dir');  // read file - sychronous
console.log(file.toString());

fs.appendFile('./dir', 'txt', err => {  // write to a file
  if (err) {
    console.log(err);
  }
});

fs.writeFile('newFile', 'txt', err => { // add new file
  if (err) {
    console.log(err);
  }
});

fs.unlink('./dir', err => {             // delete file
  if (err) {
    console.log(err);
  }
  console.log('Inception');
});

console.time('nameTimer');              // log time to execute
console.timeEnd('nameTimer');