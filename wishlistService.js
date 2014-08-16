function wishlistService (db) {
    this.addItem = function (item) {
        db.wishlistItems.add(item);
    };
}