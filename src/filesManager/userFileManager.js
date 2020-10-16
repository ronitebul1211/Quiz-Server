/**
 readFile vs readFileSync
 https://stackoverflow.com/questions/17604866/difference-between-readfile-and-readfilesync
 you should never call readFileSync in a node express/webserver since it will tie up the single thread loop while I/O is performed.
 */

//TODO: refactor: # use async function # error handling

const fs = require("fs");
const path = require("path");

/** Create json file represent user in data/users. (file name: user id, file content: user data */
const createUserFile = (user) => {
   const userJson = JSON.stringify(user);
   fs.writeFileSync(path.resolve(__dirname, "../../data/users", `${user.id}.json`), userJson);
};

module.exports = {
   createUserFile,
};
