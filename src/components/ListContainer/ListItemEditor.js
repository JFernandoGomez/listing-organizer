import React, { useState, useContext } from 'react';
import CancelIcon from '@material-ui/icons/Close';
import AcceptIcon from '@material-ui/icons/Check';
import { ListContext } from '../../context/listContext';
import { Input } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

export function ListItemEditor({ item, close }) {

  const { list, editList } = useContext(ListContext);
  const [nameValue, setHeaderName] = useState(item.name);

  const handleOnChange = (event) => {
    setHeaderName(event.target.value);
  }

  const handleAccept = () => {
    const itemToEdit = list.findIndex(itemFound => itemFound.id === item.id);
    const newList = [...list];
    newList[itemToEdit].name = nameValue;
    editList(newList)
    close();
  }

  const handleClose = () => {
    close();
  }
  return (
    <React.Fragment>
      <Input
        value={nameValue}
        onChange={handleOnChange}
        className={'list-header__input'}
        inputProps={{
          'aria-label': 'Item Name',
				}}
				autoFocus={true}
      />
      <IconButton
        aria-label="Accept"
        aria-controls="long-menu"
        onClick={handleAccept}
      >
        <AcceptIcon />
      </IconButton>
      <IconButton
        aria-label="Cancel"
        aria-controls="long-menu"
        onClick={handleClose}
      >
        <CancelIcon />
      </IconButton>
    </React.Fragment>
  )
}
