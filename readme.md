College Finder

Application to search college program by key word

Benchmarks - https://github.com/travist/meanapp/

Tree
server > 
index.js --> routes.js --> ProgramController.js
 \-->models/index.js --> Program.js

 Prerequisite
 1. install Node
 2. install MongoDB

 Server - Setup
 1. mkdir server, cd server
 2. npm install -g grunt-cli
 3. npm install -g bower
 4. copy package.json from meanapp sample and drop it under server/
 5. npm install ( install all dependancy lib)
 6. copy meanapp under server...replace all Movie with Program (as per Tree above)
 7. (run node) node index
 8. (from browser) localhost:3000/program
 9. Open Postman and verify server API

Client - Setup
1. mkdir client and cd client.. copy meanapp\* to client...
1.1. npm install (just use meanapp package.json.. latest versions are not working)
3. npm install -g grunt-cli (optional)
2. npm install -g yo
3. npm install -g generator -angular
4. yo angular (just enter for all questions, at last, enable only route.js)
5. grunt server (If you have error shows, not found any modules, run 'npm install grunt....')
5* error... npm i --save-dev grunt-contrib-cssmin
If you have 'couldn't find compass.bat'.. npm install compass
If still not working
 ..1. install ruby into Window 7
   2. gem install compass
   3. grunt serve (it should bring up browser automatically)
6. open browser... localhost:9000
[ when you restart PC and try to load app again
  1. Users\user\mongod
  2. server\node index.js
  3. client\grunt serve
]
7. (on new dos windows, go to client) yo angular:route programs  ... create views and routes with new js and html for programs

8. open app\index.html and replace the 'about' with 'programs' and 'About' with 'Programs'
9. (create table view for all programs) modify 'scripts/controllers/programs.js' with hard coded value title, url for test.. it shows list of programs on browser
10. (Use Bower to add Restangular into my project...from client folder)C:\modules\finder\client>bower install --save restangular
(This process add restangular into my app/index.html )

11. (now add logic to query list) in app.js... add Restangular for Program
(update Program.js ... add .factory('ProgramRestangular'...)
12. browse query.. from db
13 (add CRUD capability...)
   yo angular:route program-add --url=create/program
   yo angular:route program-view --url=program/:id
   yo angular:route program-delete --url=program/:id/delete
   yo angular:route program-edit --url=program/:id/edit
   
Client model

   client/app/index.html

   scripts/app.js ---------------> views/main.html & about.html
   scripts/controllers/main.js as clientApp, MainCtrl
   scripts/controllers/about.js as clientApp, AboutCtrl

