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
// 
app.get("/indoor", (request, response) => {
  queries
    .list("indoor")
    .then(db_sfdoc => {
      response.json({ db_sfdoc });
    })
    .catch(console.error);
});
//
app.get("/outdoor", (request, response) => {
  queries
    .list("outdoor")
    .then(db_sfdoc => {
      response.json({ db_sfdoc });
    })
    .catch(console.error);
});




app.get("/indoor/:id", (request, response) => {
  queries
    .read(request.params.id, "indoor")
    .then(indoor => {
      indoor ? response.json({ indoor }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/outdoor/:id", (request, response) => {
  queries
    .read(request.params.id, "outdoor")
    .then(outdoor => {
      outdoor ? response.json({ outdoor }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/indoor", (request, response) => {
  queries
    .create(request.body, "indoor")
    .then(indoor => {
      response.status(201).json({ indoor });
    })
    .catch(console.error);
});

app.post("/outdoor", (request, response) => {
  queries
    .create(request.body, "outdoor")
    .then(outdoor => {
      response.status(201).json({ outdoor });
    })
    .catch(console.error);
});

app.delete("/indoor/:id", (request, response) => {
  queries
    .delete(request.params.id, "indoor")
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.delete("/outdoor/:id", (request, response) => {
  queries
    .delete(request.params.id, "outdoor")
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/indoor/:id", (request, response) => {
  queries
    .update(request.params.id, request.body, "indoor")
    .then(indoor => {
      response.json({ indoor });
    })
    .catch(console.error);
});

app.put("/outdoor/:id", (request, response) => {
  queries
    .update(request.params.id, request.body, "outdoor")
    .then(outdoor => {
      response.json({ outdoor });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
