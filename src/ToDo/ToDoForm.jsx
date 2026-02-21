import { ListItem } from "@mui/material";
import {TextField} from "@mui/material";
import { useState } from "react";
import { Create } from "@mui/icons-material";
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material";

export default function ToDoForm({addTodo}){
    const [task,setTask] =useState("")

    const textChange= (evt)=>{
setTask(evt.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(task)
        setTask("")
    }
    return(
    <ListItem>
        <form onSubmit={handleSubmit}>
<TextField id="outlined-basic" label="Task" variant="outlined" onChange={textChange} value={task} sx={{ width: "330px" }}
slotProps={{
    input:{
        endAdornment:( <InputAdornment position="end">
                <IconButton
                  aria-label={
                    'hide the password' 
                  }
                  edge="end"
                  type="submit"
                >
                <Create/>
                </IconButton>
              </InputAdornment>)
    }
}}
/>
</form>
    </ListItem>
    )
    }