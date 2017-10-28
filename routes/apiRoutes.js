app.get("/api/tables", function(req, res) {
    res.json(current);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(waiting);
  });

  app.post("/api/reserve", function(req, res) {
    
      var newRes = req.body;
      
      if(current.length > 5) {
        waiting.push(newRes);
        res.json(newRes);
      }
    
      else {
        current.push(newRes);
        res.json(newRes);
      }
    });