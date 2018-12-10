'use strict';

/* global cuid, Item */

// eslint-disable-next-line no-unused-vars
const store = (function() {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm =  '';
  function findById(name) {
    store.items.find(item => item.name === name);
  }
  function addItem(name) {
    try {
      Item.validateName(name);
      const newItem = Item.create(name);
      this.items.push(newItem);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`Cannot add item: ${err.message}`);
    }
  }
  function findAndToggleChecked(id) {
    const foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
  }
  function findAndUpdateName(id, newName) {
    try {
      Item.validateName(newName);
      const item = this.findById(id);
      item.name = newName;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`Cannot update name: ${err.message}`);
    }
  }
  function findAndDelete(id) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}());