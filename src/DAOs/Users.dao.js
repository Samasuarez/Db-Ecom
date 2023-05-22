const Users = require("./mongo/models/users.models");

class UsersDAO {
  async getAll() {
    try {
      const users = await Users.find();
      return users;
    } catch (error) {
      throw error;
    }
  }

  async insertOne(newUserInfo) {
    try {
      const newUser = await Users.create(newUserInfo);
      return newUser;
    } catch (error) {
      throw error;
    }
  }
  async deleteAllOnlyForDevs() {
    await Users.deleteMany();
  }
}

module.exports = UsersDAO;
