/* global store, cuid */

'use strict'


const store = (function () {

  const findById = function (id) {
    return store.items.find(item => {
      return item.id === id;
    });
  };

  const addItem = function (name) {
    try {
      Item.validateName(name)
      this.items.push(Item.create(itemName));
    }
    catch (e) {
      console.log('Could create item because of' + e)
    }
  };

  const findAndToggleChecked = function (id) {
    console.log(this.items);
    const foundItems = this.findById(id);
    console.log(foundItems);
    foundItems.checked = !foundItems.checked;
    shoppingList.render();
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
    findAndToggleChecked
  };
}());



