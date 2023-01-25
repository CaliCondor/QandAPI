# QandAPI

This is Willy's SDC Repo for the Questions and Answers section.



repo structure

src
  controller
    questions - this handles the question related routes, and manipulates the db accordingly 
    answers - ^ except for answers
  model
    model - this houses schema logic, exported as models
  index.ts - this creates the express server, sets up routes to the controller appropriately, turns on the server via 'listen'
  db.ts - this creates and exports the db connection


  Creating my index structure- 
  which keys in my db require constant time lookup? id, product_id, question_id  (id is in both questions and answers)