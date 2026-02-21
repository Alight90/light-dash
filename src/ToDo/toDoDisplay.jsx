import { useState, useEffect } from "react"
import * as React from 'react';
import List from '@mui/material/List';
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid'
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function ToDoDisplay(){
    const getInitialData =() =>{
   const data= JSON.parse(localStorage.getItem("todo"))
   if (!data) return[]
   return data
}
const [toDo,setToDo] = useState(getInitialData)
 
useEffect(()=>{
localStorage.setItem(
    'todo',
    JSON.stringify(toDo)
)
},[toDo])

const removeToDo = (id)=>{
    setToDo(prevToDo=>{
        return prevToDo.filter(t=>t.id !==id)
    })
}
  const handleToggle = (id) => {
    setToDo(prevToDo=>{
        return prevToDo.map(toDo=>{
            if(toDo.id===id){
                return {...toDo,isComplete:!toDo.isComplete}
            }else{
                return toDo
            }
        })
    })
    }

    const addTodo = (text)=>{
        setToDo(prevToDo=>{
          return  [...prevToDo,{id:uuidv4(), item:text,isComplete:false}]
            
        })
    }
  return ( 
    <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column", alignItems:"center",m:"3"}}>
 <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            ToDos List
          </Typography>
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',display: "flex",
    flexDirection: "column",
    alignItems: "center"
 }}>
      {toDo.map((toDo)=>(
    <ToDoItem toDo={toDo}  removeToDo={()=>removeToDo(toDo.id)} complete={()=>handleToggle(toDo.id)} key={toDo.id} />
 ))}
     <ToDoForm addTodo={addTodo}/>
    </List>
    </Box> 
  );

}
