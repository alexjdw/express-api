# Express API
This is the bare minimum API that's possible in express. For ease of use, all API routes are exposed as GET requests and only one piece of data is available per record.

## Usage
* `npm install` the required packages from the package-lock
* ensure you have a MongoDB server available that you can connect to running on `localhost`.
* `nodemon server.js`

Your server will now be running on localhost:8000. Try the following routes:
```
localhost:8000/
localhost:8000/new/Mike
localhost:8000/Mike
localhost:8000/

localhost:8000/new/Joe
localhost:8000/new/Steve
localhost:8000/
localhost:8000/remove/Steve
```

If you try to add a duplicate name or the query errors out, you'll get an error message.