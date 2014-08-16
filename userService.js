function userService (db) {
    this.getUser = function (id) {
        return db.users.get(id);
    };
}