import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function ListHeaderOptions(props) {

  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleEdit = () => {
    handleClose();
    props.handleEdit();
  }
  const handleDelete = () => {
    handleClose();
    props.handleDelete();
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
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit}><EditIcon/>Edit</MenuItem>
        <MenuItem onClick={handleDelete}><DeleteOutlinedIcon/> Delete</MenuItem>
      </Menu>
    </div>
  );
}