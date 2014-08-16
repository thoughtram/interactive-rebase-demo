function wishlistService (db) {
    this.addItem = function (item) {
        db.wishlistItems.add(item);
    };

    this.addItems = function (items) {
        db.wishlistItems.addBatch(items);
    };

    this.deleteItem = function (id) {
        db.wishlistItems.remove(id);
    };
}