import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DeleteContext } from '../../context/deleteContext';
import { ListContext } from '../../context/listContext';

const getDepthItem = (path, object) => {
  let pathMade = '';
  return path.reduce(
    (xs, x, index) => {
      const value = (xs && xs[x]) ? xs[x] : null;
      if (index === path.length - 1) {
        xs.splice(x, 1)
      }
      pathMade = pathMade + '.' + x;
      console.log('pathMade', pathMade);
      console.log('value', value, x);
      return value;
    },
    object
  )
}

export default function DeleteDialog() {
  const [open, setOpen] = React.useState(true);

  const { itemToDelete, setItemToDelete } = useContext(DeleteContext);
  const { list, editList } = useContext(ListContext);

  const handleClose = () => {
    setOpen(false);
    setItemToDelete(null);
  }

  const handleDelete = () => {
    const newList = [...list];
    if (!itemToDelete instanceof Array) {
      handleClose();
      return;
    }
    
    let item = getDepthItem(itemToDelete, newList);
    console.log(newList);
    if (!!item) {
      editList(newList);
    }
    handleClose();
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure you wish to delete this item?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action can't be undone!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} color="primary">
            Accept
          </Button>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
