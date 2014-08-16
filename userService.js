function userService (db) {
    this.getUserById = function (id) {
        return db.users.get(id);
    };

    this.updateUser = function (user) {
        db.users.update(user);
    };
}