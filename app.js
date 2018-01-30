const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

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

app.get("/indoor", (request, response) => {
  queries
    .list("indoor")
    .then(indoor => {
      response.json({ indoor });
    })
    .catch(console.error);
});

app.get("/outdoor", (request, response) => {
  queries
    .list("outdoor")
    .then(outdoor => {
      response.json({ outdoor });
    })
    .catch(console.error);
});

app.get("/indoor/:id", (request, response) => {
  queries
    .read("indoor", request.params.id)
    .then(indoor => {
      indoor ? response.json({ indoor }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/outdoor/:id", (request, response) => {
  queries
    .read("outdoor", request.params.id)
    .then(outdoor => {
      outdoor ? response.json({ outdoor }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/indoor", (request, response) => {
  queries
    .create("indoor", request.body)
    .then(indoor => {
      response.status(201).json({ data: indoor });
    })
    .catch(console.error);
});

app.post("/outdoor", (request, response) => {
  queries
    .create("outdoor", request.body)
    .then(outdoor => {
      response.status(201).json({ data: outdoor });
    })
    .catch(console.error);
});

app.delete("/indoor/:id", (request, response) => {
  queries
    .delete("indoor", request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.delete("/outdoor/:id", (request, response) => {
  queries
    .delete("outdoor", request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/indoor/:id", (request, response) => {
  queries
    .update("indoor", request.params.id, request.body)
    .then(indoor => {
      response.json({ data: indoor[0] });
    })
    .catch(console.error);
});

app.put("/outdoor/:id", (request, response) => {
  queries
    .update("outdoor", request.params.id, request.body)
    .then(outdoor => {
      response.json({ data: outdoor[0] });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;





