function catalogService (db) {
    this.getProductById = function (id) {
        return db.products.get(id);
    };
}