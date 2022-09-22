const path = require('path');
const fs = require('fs');

//============================================================//  get all users         //===============//
const getallusers = (req, res) => {
  const user = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/user.json'))
  );
  res.json(user);
};
//==============================================================//  post user           //===============//
const postusers = (req, res) => {
  const user = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/user.json'))
  );
  const { name, skill } = req.body;

  if (!name || !skill) {
    res.json({
      mess: 'name and skill required',
    });
  } else {
    user.push({
      id: user.length - 1 + 2,
      name: name,
      skill: skill,
    });

    fs.writeFileSync(
      path.join(__dirname, '../db/user.json'),
      JSON.stringify(user)
    );
  }
  res.send('success');
};
//==============================================================//  export controllers  //===============//
module.exports = {
  getallusers,
  postusers,
};
