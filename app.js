const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());


// this displays both tables 
app.get("/", (request, response) => {
  queries
    .list("indoorfields")
    .then(indoorfields =>
      queries.list("outdoorfields").then(outdoorfields =>
        response.json({
          indoorfields: indoorfields,
          outdoorfields: outdoorfields
        })
      )
    )
    .catch(console.error);
});
// shows the indoorfields table 
app.get("/indoorfields", (request, response) => {
  queries
    .list("indoorfields")
    .then(db_sfdoc => {
      response.json({ db_sfdoc });
    })
    .catch(console.error);
});
// shows the outdoorfields table 
app.get("/outdoorfields", (request, response) => {
  queries
    .list("outdoorfields")
    .then(db_sfdoc => {
      response.json({ db_sfdoc });
    })
    .catch(console.error);
});



// gets the indoorfields table by name 
app.get("/indoorfields/:name", (request, response) => {
  queries
    .read(request.params.name, "indoorfields")
    .then(indoorfields => {
      indoorfields ? response.json({ indoorfields }) : response.sendStatus(404);
    })
    .catch(console.error);
});

// gets the outdoorfields table by name 
app.get("/outdoorfields/:name", (request, response) => {
  queries
    .read(request.params.name, "outdoorfields")
    .then(outdoorfields => {
      outdoorfields ? response.json({ outdoorfields }) : response.sendStatus(404);
    })
    .catch(console.error);
});

// adds to the indoorfields table 
app.post("/indoorfields", (request, response) => {

  console.log(request.body);

  queries
    .create(request.body, "indoorfields")
    .then(indoorfields => {
      response.status(201).json({ indoorfields });
    })
    .catch(console.error);
});

// adds to the outdoorfields table 
app.post("/outdoorfields", (request, response) => {
  queries
    .create(request.body, "outdoorfields")
    .then(outdoorfields => {
      response.status(201).json({ outdoorfields });
    })
    .catch(console.error);
});

// deletes the indoorfields table by name 
app.delete("/indoorfields/:name", (request, response) => {
  queries
    .delete(request.params.name, "indoorfields")
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

// deletes the outdoorfields table by na,e 
app.delete("/outdoorfields/:name", (request, response) => {
  queries
    .delete(request.params.name, "outdoorfields")
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

// updates the indoorfields table by name
app.put("/indoorfields/:name", (request, response) => {
  queries
    .update(request.params.name, request.body, "indoorfields")
    .then(indoorfields => {
      response.json({ indoorfields });
    })
    .catch(console.error);
});
// updates the outdoorfields table by name
app.put("/outdoorfields/:name", (request, response) => {
  queries
    .update(request.params.name, request.body, "outdoorfields")
    .then(outdoorfields => {
      response.json({ outdoorfields });
    })
    .catch(console.error);
});

// invoke everything? 
app.use((request, response) => {
  response.send(404);
});

module.exports = app;
