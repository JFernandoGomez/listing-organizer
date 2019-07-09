import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DeleteContext } from '../../context/deleteContext';
import { ListContext } from '../../context/listContext';

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
    if (!itemToDelete) {
      handleClose();
      return;
    }

		newList[itemToDelete].deleted = true;
		editList(newList);
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
            This action can't be undone! All child Items will be lost.
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
