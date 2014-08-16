function userService (db) {
    this.getUserById = function (id) {
        return db.users.get(id);
    };
}