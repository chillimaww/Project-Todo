import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
const Todo = ({ todo }) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={todo} secondary={todo} />
      </ListItem>
    </List>
  );
};
export default Todo;
