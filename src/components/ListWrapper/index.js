import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import './ListWrapper.scss';
import { ListContainer } from '../ListContainer';
import { ListContext } from '../../context/listContext';
import DeleteDialog from '../DeleteDialog';
import { DeleteContext } from '../../context/deleteContext';


export default function ListWrapper(props) {

  const { list: Lists } = useContext(ListContext);
  const { itemToDelete } = useContext(DeleteContext);

  const drawLists = () => {
    return Lists.filter( list => list.parent === 0 ).map(
      (listSet, index) => {
        console.log(listSet);
        const isLastItem = index >= Object.keys(Lists).length - 1;
        return (
          <React.Fragment>
            <ListContainer listInfo={listSet} listName={listSet.name} parent={0} />
            { !isLastItem && <Divider />}
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
      { !!itemToDelete && <DeleteDialog /> }
      Add list button
    </Container>

  );
}

