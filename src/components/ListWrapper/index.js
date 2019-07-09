import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import './ListWrapper.scss';
import { ListContainer } from '../ListContainer';
import { ListContext } from '../../context/listContext';
import { DeleteContext } from '../../context/deleteContext';
import Button from '@material-ui/core/Button';

import DeleteDialog from '../DeleteDialog';

export default function ListWrapper(props) {

	const { list: Lists, editList } = useContext(ListContext);
	const { itemToDelete } = useContext(DeleteContext);
	const filteredList = Lists.filter(list => list.parent === 0 && !list.deleted);

	const handleAddNewToRoot = () => {
		const newList = [...Lists];
		const lastItem = newList[newList.length - 1];
		const newItemId = parseInt(lastItem.id) + 1;
		const newItem = {
			id: newItemId,
			name: 'New top level item',
			parent: 0,
			items: []
		}

		newList.push(newItem);
		editList(newList);
	}

	const drawLists = () => {
		return filteredList.map(
			(listSet, index) => {
				console.log('listSet', listSet);
				const isLastItem = index >= Object.keys(filteredList).length - 1;
				return (
					<React.Fragment key={index}>
						<ListContainer listInfo={listSet} parent={0} />
						{!isLastItem && <Divider />}
					</React.Fragment>
				);
			}
		)
	}

	return (

		<Container className="list-wrapper__container" maxWidth="lg" fixed={true}>
			{
				drawLists()
			}
			{!!itemToDelete && <DeleteDialog />}
			<Button
				variant="contained"
				color="primary"
				aria-label="Add"
				className="add-list__button"
				onClick={handleAddNewToRoot}
			>
				<AddIcon /> Add List
			</Button>
		</Container>

	);
}

