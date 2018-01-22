/* global store, cuid, Item, shoppingList */

'use strict';


const store = (function () {

  const findById = function (id) {
    return store.items.find(item => {
      return item.id === id;
    });
  };

  const addItem = function (name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(itemName));
    }
    catch (e) {
      console.log('Could create item because of' + e);
    }
  };

  const findAndUpdateName = function (id,newName) {
    try { (Item.validateName(newName)); 
    } catch(e) {
      console.log('Cannot add item: ' + e);
    } 
    let foundItem = this.findById(id);
    foundItem.name = newName;
  };

  const findAndToggleChecked = function (id) {
    console.log(this.items);
    const foundItem = this.findById(id);
    // console.log(foundItem);
    // foundItem.checked = !foundItem.checked;
    // shoppingList.render();
  };

  const findAndDelete = function (id) {
    const foundItem = this.findById(id);
    this.items = this.items.filter((item) => {
      return item.id !== id;
    });
  };

  return {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: '',
    findById,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}());



