const express =require('express');
const fs=require('fs');
const users= require("./MOCK_DATA.json");

const app= express();

const PORT=8000;


//Middleware
app.use(express.json());


//Routes
app.get('/', (req, res) => {
  res.send('Hello, welcome to my API!'); 
});

app.get('/users', (req,res)=>{
    const html=`
    <ul>
    ${users.map(user=>`<li>${user.first_name}</li>`).join("")}      
    </ul>
    `
    res.send(html);          //SSR
});


//REST api

app.get('/api/users', (req,res)=>{
  return res.json(users);
});

app.get('/api/users/:id', (req,res)=>{
      const id = Number(req.params.id);
      const user = users.find((user)=> user.id==id);
      return res.json(user);
});



app.post('/api/users', (req, res) => {
  const body=req.body;
  users.push({...body, id: users.length+1});
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
    return res.status(200).json({ status: "successfully added: ", id: users.length });
  });
  
});

// PATCH - Update user by ID
app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) return res.status(404).json({ status: "error", message: "User not found" });

    // Update only fields provided in request
    Object.assign(user, req.body);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), () => {
        res.status(200).json({ status: "success", user });
    });
});

// DELETE - Remove user by ID
app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) return res.status(404).json({ status: "error", message: "User not found" });

    const deletedUser = users.splice(index, 1)[0];

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), () => {
        res.status(200).json({ status: "success", user: deletedUser });
    });
});




app.listen(PORT, ()=>{
  console.log(`Server is listening on the http://localhost:${PORT}`)
})