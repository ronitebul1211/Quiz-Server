/**
 readFile vs readFileSync
 https://stackoverflow.com/questions/17604866/difference-between-readfile-and-readfilesync
 you should never call readFileSync in a node express/webserver since it will tie up the single thread loop while I/O is performed.
 */

//TODO: refactor: # use async function # error handling

const fs = require("fs");
const path = require("path");

/** Create json file represent user in data/users. (file name: user id, file content: user data */
const saveUserInFile = (user) => {
   const userJson = JSON.stringify(user);
   fs.writeFileSync(path.resolve(__dirname, "../../data/users", `${user.id}.json`), userJson);
};

/** Update user file with new data */
const updateUserInFile = (user) => {
   const isUserFileExist = fs.existsSync(path.resolve(__dirname, "../../data/users", `${user.id}.json`));
   if (isUserFileExist) {
      saveUserInFile(user);
   }
};

/** Get user data from file by user id */
const getUserFromFile = (userId) => {
   //TODO: throw file not exist = id not exist
   const userBuffer = fs.readFileSync(path.resolve(__dirname, "../../data/users", `${userId}.json`));
   const userJsonString = userBuffer.toString();
   return JSON.parse(userJsonString);
};

module.exports = {
   saveUserInFile,
   getUserFromFile,
   updateUserInFile,
};
