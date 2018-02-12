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
    .list("indoor")
    .then(indoor =>
      queries.list("outdoor").then(outdoor =>
        response.json({
          indoor: indoor,
          outdoor: outdoor
        })
      )
    )
    .catch(console.error);
});
// shows the indoor table 
app.get("/indoor", (request, response) => {
  queries
    .list("indoor")
    .then(db_sfdoc => {
      response.json({ db_sfdoc });
    })
    .catch(console.error);
});
// shows the outdoor table 
app.get("/outdoor", (request, response) => {
  queries
    .list("outdoor")
    .then(db_sfdoc => {
      response.json({ db_sfdoc });
    })
    .catch(console.error);
});



// gets the indoor table by name 
app.get("/indoor/:name", (request, response) => {
  queries
    .read(request.params.name, "indoor")
    .then(indoor => {
      indoor ? response.json({ indoor }) : response.sendStatus(404);
    })
    .catch(console.error);
});

// gets the outdoor table by name 
app.get("/outdoor/:name", (request, response) => {
  queries
    .read(request.params.name, "outdoor")
    .then(outdoor => {
      outdoor ? response.json({ outdoor }) : response.sendStatus(404);
    })
    .catch(console.error);
});

// adds to the indoor table 
app.post("/indoor", (request, response) => {
  queries
    .create(request.body, "indoor")
    .then(indoor => {
      response.status(201).json({ indoor });
    })
    .catch(console.error);
});

// adds to the outdoor table 
app.post("/outdoor", (request, response) => {
  queries
    .create(request.body, "outdoor")
    .then(outdoor => {
      response.status(201).json({ outdoor });
    })
    .catch(console.error);
});

// deletes the indoor table by name 
app.delete("/indoor/:name", (request, response) => {
  queries
    .delete(request.params.name, "indoor")
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

// deletes the outdoor table by na,e 
app.delete("/outdoor/:name", (request, response) => {
  queries
    .delete(request.params.name, "outdoor")
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

// updates the indoor table by name
app.put("/indoor/:name", (request, response) => {
  queries
    .update(request.params.id, request.body, "indoor")
    .then(indoor => {
      response.json({ indoor });
    })
    .catch(console.error);
});
// updates the outdoor table by name
app.put("/outdoor/:name", (request, response) => {
  queries
    .update(request.params.name, request.body, "outdoor")
    .then(outdoor => {
      response.json({ outdoor });
    })
    .catch(console.error);
});

// invoke everything? 
app.use((request, response) => {
  response.send(404);
});

module.exports = app;
