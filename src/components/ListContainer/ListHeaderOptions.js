import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './ListHeaderOptions.scss';

export default function ListHeaderOptions(props) {

	const { handleEdit, handleDelete, handleAddItem, parent } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
	}

  const editHandler = () => {
    handleClose();
    handleEdit();
	}

  const deleteHandler = () => {
    handleClose();
    handleDelete();
	}

	const addHandler = () => {
		handleAddItem(parent);
		handleClose();
	}

  return (
    <div>
      <IconButton
          aria-label="More"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleOpen}
        >
          <MoreVertIcon />
        </IconButton>
      <Menu
				id="options-menu"
				className="options-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={addHandler}><AddIcon/>Add child</MenuItem>
				<MenuItem onClick={editHandler}><EditIcon/>Edit</MenuItem>
        <MenuItem onClick={deleteHandler}><DeleteOutlinedIcon/> Delete</MenuItem>
      </Menu>
    </div>
  );
}
