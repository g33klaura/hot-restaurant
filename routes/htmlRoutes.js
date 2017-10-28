app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
    
  });

  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    
  });
  
  
  
  