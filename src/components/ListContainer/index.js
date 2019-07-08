import React, { useState, useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListHeaderOptions from './ListHeaderOptions';
import { ListItemEditor } from './ListItemEditor';
import { ListContext } from '../../context/listContext';
import { DeleteContext } from '../../context/deleteContext';


export function ListContainer({ listInfo, parent }) {
  console.log(listInfo, listInfo.name);

  const [isExpanded, setExpand] = useState(false);
  const { list:originalList } = useContext(ListContext);

  const handleExpand = () => {
    console.log('isExpanded', isExpanded);
    setExpand(!isExpanded);
  }

  const renderList = () => {
    if (!!listInfo && listInfo.items) {
      console.log('listInfo ', listInfo);

      const childList = originalList.filter(item => listInfo.items.includes(item.id));
      
      return childList.map( (subList, index) => {
        return (
          <ListContainer listInfo={subList} parent={subList.id}/>
        )
      })
    }

    return listInfo.map( item => 
      <ListItem button >
        <ListItemText inset primary={item} />
      </ListItem>
    )
  }

  return (
    <List component="nav" aria-label="Main mailbox folders">
      {/* -- list Item header -- */}
      {/* -- is header ? -- */}
      { listInfo.items && 
        <ListHeaderItem
          headerName={listInfo.name}
          isExpanded={isExpanded}
          handleExpand={handleExpand}
        />
      }
      { isExpanded && listInfo.items && renderList() }
      {/* -- is list Item-- */}
    </List>
  );
}

export function ListHeaderItem({ headerName, handleExpand, isExpanded }) {

  const [isEditing, toggleEditing] = useState(false);
  const { list } = useContext(ListContext);
  const { setItemToDelete } = useContext(DeleteContext);

  // console.log('has parent??' , parent)

  const toggleEdit = () => {
    toggleEditing(!isEditing);
  };

  const handleDelete = () => {
    const indexToDelete = list.findIndex(item => item.name === headerName);
    // setItemToDelete([indexToDelete, 'items', 0, 'items', 2]);
    setItemToDelete([indexToDelete]);
  };

  return (
    <ListItem
      button={!isEditing}
      onClick={!isEditing ? handleExpand : null}
    >
      <ListItemIcon>
        <IconButton
          aria-label="More"
          aria-controls="long-menu"
          aria-haspopup="true"
        >
          {!isExpanded && <ExpandMore />}
          {isExpanded && <ExpandLess />}
        </IconButton>
      </ListItemIcon>
      {
        isEditing &&
        <ListItemEditor
          name={headerName}
          close={ () => toggleEditing(false)}
        />
      }
      {
        !isEditing && <ListItemText primary={headerName} />
      }
      <ListItemSecondaryAction>
        <ListHeaderOptions
          handleEdit={toggleEdit}
          handleDelete={handleDelete}
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}