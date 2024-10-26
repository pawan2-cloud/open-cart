import Fakerator from "fakerator";
import fs from "fs/promises";
import path from "path";
const fakerator = Fakerator();
const filePath = path.resolve(__dirname, "../fixtures/user.json");
let getUserData = require(filePath);
let getUpdatedUserData;

// create a user
export const createUser = ()=> {
  try {
    const password = fakerator.internet.password(10);
    getUserData.push({
      firstName: fakerator.names.firstName(),
      lastName: fakerator.names.lastName(),
      password,
      confirmPassword: password,
      email: fakerator.internet.email(),
      phone: fakerator.phone.number(),
    });
    getUpdatedUserData = require(filePath);
    if (getUserData.length < getUpdatedUserData.length) {
      throw "Unable to add user to fixture";
    }
    fs.writeFile(filePath, JSON.stringify(getUserData, null, 2), "utf-8");
  } catch (err) {
    console.log(err);
  }
};

//cleanUp or delete a user
export const cleanUpUser = () => {
  try {
      getUserData.pop();
      fs.writeFile(
        filePath,
        JSON.stringify(getUpdatedUserData, null, 2),
        "utf-8"
      );
  } catch (err) {
    throw new Error(`${err} Unable to delete user from fixture`);
  }
};
