


app.get("/api/tables", function(req, res) {
    res.json(current);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waiting);
  }); 