app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    
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