import React, { useState, useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListHeaderOptions from './ListHeaderOptions';
import { ListItemEditor } from './ListItemEditor';
import { ListContext } from '../../context/listContext';
import { DeleteContext } from '../../context/deleteContext';


export function ListContainer({ listInfo, parent }) {
	console.log(listInfo, listInfo.name);

	const [isExpanded, setExpand] = useState(false);
	const { list: originalList } = useContext(ListContext);

	if(listInfo.deleted){
		return null;
	}

	const handleExpand = (value) => {
		setExpand(value === true ? value : !isExpanded);
	}

	const renderList = () => {
		if (!!listInfo && listInfo.items) {

			const childList = originalList.filter( item => listInfo.items.includes(item.id) && !listInfo.deleted );

			return childList.map(
				(subList) => <ListContainer listInfo={subList} parent={subList.id} />
			);
		}
	}

	return (
		<List component="nav" aria-label="Main mailbox folders">
			<ListRowItem
				listInfo={listInfo}
				isExpanded={isExpanded}
				handleExpand={handleExpand}
			/>
			{
				// render child list
				isExpanded && renderList()
			}
		</List>
	);
}

export function ListRowItem({ listInfo, handleExpand, isExpanded }) {

	const { name: headerName, items, id } = listInfo;
	const { list, editList } = useContext(ListContext);

	const { setItemToDelete } = useContext(DeleteContext);
	const [isEditing, toggleEditing] = useState(false);

	const toggleEdit = () => {
		toggleEditing(!isEditing);
	};

	const handleDelete = () => {
		const indexToDelete = list.findIndex(item => item.id === id);
		setItemToDelete(indexToDelete);
	};

	const handleAddItem = (parent) => {
		const newList = [...list];
		const lastItem = newList[ newList.length -1 ];
		const newItemId = parseInt(lastItem.id) + 1;
		const newItem = {
			id: newItemId,
			name: 'new item',
			parent: parent.id,
			items: []
		}

		const parentItemIndex = newList.findIndex(item => item.id === parent.id );
		newList[parentItemIndex].items.push(newItemId)

		newList.push(newItem);
		handleExpand(true);
		editList(newList);
	}

	const showExpandable = !isEditing && !!items && items.length > 0;

	return (
		<ListItem
			className="list-row__item"
			button={showExpandable}
			onClick={showExpandable ? handleExpand : null}
		>
			{
				showExpandable &&
				<ListItemIcon>
					{!isExpanded ? <ExpandMore /> : <ExpandLess />}
				</ListItemIcon>
			}
			{
				// show editor
				isEditing &&
				<ListItemEditor
					item={listInfo}
					close={() => toggleEditing(false)}
				/>
			}
			{
				// not editing
				!isEditing && <ListItemText primary={headerName} />
			}
			<ListItemSecondaryAction>
				<ListHeaderOptions
					handleEdit={toggleEdit}
					handleDelete={handleDelete}
					handleAddItem={handleAddItem}
					parent={listInfo}
				/>
			</ListItemSecondaryAction>
		</ListItem>
	)
}
