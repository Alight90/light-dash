import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete"

export default function ToDoItem({toDo, removeToDo,complete}){
 const labelId = `checkbox-list-label-${toDo.id}`;
       
 return (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments" onClick={removeToDo}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                onChange={complete}
                  edge="start"
                  checked={toDo.isComplete}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={toDo.item} />
            </ListItemButton>
          </ListItem>
        )}