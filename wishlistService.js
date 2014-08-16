function wishlistService (db) {
    this.addItem = function (item) {
        db.wishlistItems.add(item);
    };

    this.addItems = function (items) {
        db.wishlistItems.addBatch(items);
    };

    this.deleteItemById = function (id) {
        db.wishlistItems.remove(id);
    };

    this.deleteItemsByIds = function (ids) {
        db.wishlistItems.removeBatch(ids);
    };
}