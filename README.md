## Auto-Emailer App

###### Auto-Emailer is an app where users can manage important contact dates to specific individuals.  The app allows a user to add basic data that pertains to a contact, edit the data (at a later time) and schedule automatic follow up reminder emails to be sent to the user.

* note: There is a 5 minute delay when Nodemailer sends the email until the receiver gets the email in thier account.



## Technologies Used
  1. Express.js ``` v4.15.2 ```
  2. Angular.js ``` v1.6.3 ```
  3. Angular Route ``` v1.6.3 ```
  4. Node.js
  5. Body-Parser ``` v1.17.1 ```
  6. PG ``` v6.1.4 ```
  7. GIT / GitHub
  8. Bootstrap ``` v3.3.7 ```
  9. Express ``` v4.15.2 ```
  10. Firebase `` 3.7.5 ``
  11. Firebase-admin `` 4.0.3 ``
  12. Node Mailer `` 4.0.1 ``



## How To Install App
  1. Download zip file
  2. Open terminal and navigate into folder
  3. Run commands:
    - ``` npm install ``` Installs Node Packages including dependencies from package.json
    - ``` brew services start postgresql ``` Starts DB server connection to Postico (or equivalent for MongoDB)
    - ``` npm start ``` Starts server
    - ``` npm test ``` Starts server using Nodemon
  4. Configure / Create DB
    - Download and install SQL DB client to aide in creating the DB
    - Cut and paste code from database.sql file into 3rd party software from the step pervious
  5. Server is listening on port: 5000

---

## License
##### Copyright 2017 Chris Stanton

###### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

###### The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

###### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
