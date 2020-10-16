/** Generate new id base on current id counter value */
const generateId = (idCounterValue) => {
   return idCounterValue + 1;
};

module.exports = {
   generateId,
};
