const path = require('path');
const fs = require('fs');

//============================================================//  get all users         //===============//
/**
 *
 * @GET method
 * @Get all user
 * @public all user
 */
//============================================================//  get all users         //===============//
const getallusers = (req, res) => {
  const user = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/user.json'))
  );
  res.json(user);
};
//==============================================================//  post user           //===============//
/**
 *
 * @POST method
 * @create all user
 * @public all user
 */
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
//===============================================================//  get single user     //====================//
/**
 *
 * @GET method
 * @Get single user
 * @public all user
 */
//===============================================================//  get single user     //====================//
const singleuser = (req, res) => {
  const user = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/user.json'))
  );

  const singledata = user.find((data) => data.id == req.params.id);
  res.status(200).json(singledata);

  res.status(404).json({
    message: 'single data not found',
  });
};
//===============================================================//  edit data           //====================//
/**
 *
 * @PUT method
 * @update all user
 * @public all user
 */
//===============================================================//  edit data           //====================//
const edituser = (req, res) => {
  const user = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/user.json'))
  );

  user[user.findIndex((data) => data.id == req.params.id)] = {
    ...user[user.findIndex((data) => data.id == req.params.id)],
    name: req.body.name,
    skill: req.body.skill,
  };
  fs.writeFileSync(
    path.join(__dirname, '../db/user.json'),
    JSON.stringify(user)
  );
  res.status(200).json({
    message: 'update success',
  });
};
//===============================================================//  delete user        //===============//
/**
 *
 * @DELETE method
 * @Delete  user
 * @public all user
 */
//===============================================================//  delete user        //===============//
const deleteuser = (req, res) => {
  const user = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../db/user.json'))
  );

  const afterdeleteuser = user.filter(
    (data) => data.id != req.params.id
  );
  fs.writeFileSync(
    path.join(__dirname, '../db/user.json'),
    JSON.stringify(afterdeleteuser)
  );

  res.status(200).json({
    message: 'data   delete successfully',
  });
};
//==============================================================//  export controllers  //===============//
module.exports = {
  getallusers,
  postusers,
  edituser,
  deleteuser,
  singleuser,
};
