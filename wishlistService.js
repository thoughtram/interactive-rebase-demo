function wishlistService (db) {
    this.addItem = function (item) {
        db.wishlistItems.add(item);
    };

    this.deleteItem = function (id) {
        db.wishlistItems.remove(id);
    };
}