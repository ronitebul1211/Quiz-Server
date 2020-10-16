/**
 readFile vs readFileSync
 https://stackoverflow.com/questions/17604866/difference-between-readfile-and-readfilesync
 you should never call readFileSync in a node express/webserver since it will tie up the single thread loop while I/O is performed.
 */

//TODO: refactor: # use async function # error handling

const fs = require("fs");
const path = require("path");

/** Get current value of counter id  */
const getIdCounter = () => {
   const usersConfigBuffer = fs.readFileSync(path.resolve(__dirname, "../../data/users/config.json"));
   const usersConfigJsonString = usersConfigBuffer.toString();
   const userConfig = JSON.parse(usersConfigJsonString);
   return userConfig.usersIdCounter;
};

/** Set updated counter id value */
const setIdCounter = (updatedIdCounter) => {
   const userConfig = { usersIdCounter: updatedIdCounter };
   const usersConfigJsonString = JSON.stringify(userConfig);
   fs.writeFileSync(path.resolve(__dirname, "../../data/users/config.json"), usersConfigJsonString);
};

module.exports = {
   getIdCounter,
   setIdCounter,
};
