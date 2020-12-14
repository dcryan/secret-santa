import React, { useState } from 'react';
import { List, ListItem, ListItemText, Paper, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const initialGroups = [
  { name: 'Group 1' },
  { name: 'Group 2' },
  { name: 'Group 3' },
  { name: 'Group 4' },
  { name: 'Group 5' },
];

const useStyles = makeStyles((theme) => ({
  list: {
    maxWidth: 400,
    minWidth: 300,
  }
}));

export function DashboardPage() {
  const classes = useStyles();

  const [groups, setGroups] = useState(initialGroups);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');

  const openCreateGroupDialog = () => {
    setDialogOpen(true);
  }

  const closeDialog = () => setDialogOpen(false);

  const createGroup = () => {
    setGroups([...groups, { name }]);
    closeDialog();
  }

  return (
    <>
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item>
        <Typography variant="h6">Secret Santa Groups</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={openCreateGroupDialog}>Create group</Button>
      </Grid>
      <Grid item>
        <Paper className={classes.list}>
          <List>
            {groups.map((group, index) => (
              <ListItem button key={index}>
                <ListItemText>{group.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <DialogTitle>
          New Group
        </DialogTitle>
        <DialogContent>
          <TextField name="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button variant="text" color="secondary" onClick={closeDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={createGroup}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
