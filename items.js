class Pastry{
  constructor(price, description, items) {
    this.price = price,
    this.description = description
    this.items = [];
  }
  allItems(){
    return this.items
  }
}

class Muffins extends Pastry{
  super(price, description)
  constructor()
}

class Cookie extends Pastry{
  super(price, description)
  constructor()
}

class Cakes extends Pastry{
  super(price, description)
  constructor()
}

