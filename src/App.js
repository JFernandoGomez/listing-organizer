import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import ListWrapper from './components/ListWrapper';
import { initialState, ListContext } from './context/listContext';
import { DeleteState, DeleteContext } from './context/deleteContext';

function App() {

  const [list, setList] = useState(initialState.startList);
  const [itemToDelete, setItemToDelete] = useState(DeleteState.itemToDelete);

  return (
    <div className="App">
      <ListContext.Provider value={{ list, editList: setList }}>
        <DeleteContext.Provider value={{ itemToDelete, setItemToDelete }} >
          <Header />
          <ListWrapper />
        </DeleteContext.Provider>
      </ListContext.Provider>
    </div>
  );
}

export default App;
