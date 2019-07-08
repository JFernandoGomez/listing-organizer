import React from 'react';

export const DeleteState = {
  itemToDelete: null,
  setItemToDelete: () => {}
};

export const DeleteContext = React.createContext(DeleteState);

