import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Snackbar } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const PostForm = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [itemType, setItemType] = useState('');
  const [time, setTime] = useState('');
  const [specification, setSpecification] = useState('');
  const [open, setOpen] = useState(false);

  function submithandler() {
    // Perform form submission logic here

    // Clear form fields
    setFrom('');
    setTo('');
    setItemType('');
    setTime('');
    setSpecification('');
    
    // Open Snackbar
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='flex-col gap-4 w-96 mx-auto'>
      <div>
        <TextField
          id="from"
          label="From"
          variant="standard"
          helperText="Starting location"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <TextField
          id="to"
          label="To"
          variant="standard"
          helperText="Destination location"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          sx={{ ml: 2 }}
        />
      </div>
      <TextField
        id="itemType"
        label="Item-Type"
        variant="standard"
        helperText="Please enter item type"
        value={itemType}
        onChange={(e) => setItemType(e.target.value)}
        sx={{ width: 600 }}
      />
      <TextField
        id="time"
        label="Time"
        variant="standard"
        helperText="Starting time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        sx={{ width: 600 }}
      />
      <TextField
        id="specification"
        label="Specification"
        variant="standard"
        helperText="Additional Info"
        value={specification}
        onChange={(e) => setSpecification(e.target.value)}
        sx={{ width: 600 }}
      />
      <Button
        variant="contained"
        size='large'
        onClick={submithandler}
        sx={{ mt: 3 }}
      >
        Post
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Post successful"
      />
    </div>
  );
};

