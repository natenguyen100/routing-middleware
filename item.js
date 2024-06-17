const items = require("./fakeDb")

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    items.push(this);
  }

  static findAll(){
    return items
  }

  static findAll(){
      return items
    }

  static update(name, data) {
    let foundItem = Item.find(name);
    foundItem.name = data.name;
    foundItem.price = data.price;

    return foundItem;
  }

  static find(name) {
    const foundItem = items.find(v => v.name === name);
    return foundItem
  }

  static remove(name) {
    let foundIdx = items.findIndex(v => v.name === name);
    items.splice(foundIdx, 1);
  }
}

module.exports = Item;