import './TakeNoteTwo.css'
import React from 'react'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Colorpopper from '../colorpopper/Colorpopper';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import {createNote} from '../../services/Dataservices'
import { fontSize } from '@mui/system';
function TakeNoteTwo(props) {
  const [note,setNotes] = React.useState({title:"",description:"",color:"",isArchived:false})
  const redirectTakeOne=()=>{
    props.PropListenTakeNoteTwo()
  }
  //setting title
  const takeTitle=(event)=>{
      setNotes((prev)=>({...prev,title:event.target.value}))
  }
  //setting description
  const takeDescription=(event)=>{
    setNotes((prev)=>({...prev,description:event.target.value}))
}
const submit = async()=>{
  console.log(note);
  let response = await createNote(note);
  console.log(response)
}
//Archived function 
 const makeArchived =()=>{
  setNotes((prev)=>({...prev,isArchived:true}))
  console.log(note)
 }
  return (
    <div className='note-two-main' >
      <Box className="note-two-container"
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 400,
        height: 120,
      },
    }}
  >
    <Paper elevation={4} className="note-two-items" style={{backgroundColor:note.color}}>
      <div className="title-two">
        <input type="text" placeholder='Title' onChange={takeTitle} style={{backgroundColor:note.color}}/>   
      </div>
      <div className="desc-two">
      <input type="text" style={{backgroundColor:note.color}} onChange={takeDescription} placeholder='Take a note...'className='input-note-one'/>
      </div>
    
      <div className="note-two-icons">
      <IconButton ><PersonAddAltOutlinedIcon fontSize='small'/></IconButton>
      <IconButton> <Colorpopper action="create" setNotes={setNotes}/></IconButton>
      <IconButton> <ImageOutlinedIcon fontSize='small'/></IconButton>
      <IconButton> <ArchiveOutlinedIcon onClick={makeArchived} fontSize='small'/></IconButton>
      <IconButton> <ImageOutlinedIcon fontSize='small'/></IconButton>
      <IconButton> <MoreVertOutlinedIcon fontSize='small'/></IconButton> 
      <IconButton><h6 style={{color:"black",fontSize:"0.5em"}} onClick={()=>{submit(); redirectTakeOne()}}>Close</h6></IconButton> 
      </div>
    </Paper>
  </Box>
    </div>
    
  )
}


export default TakeNoteTwo;



{/* <div className='note-two-container' style={{backgroundColor:note.color}}>
      <div className="title-row">
        <input onChange={takeTitle} style={{backgroundColor:note.color}} type="text" placeholder='Title' className='notetwo' />
        <PushPinOutlinedIcon color='action' fontSize='medium'/>
      </div>
      <div className="input-row">
        <input type="text" style={{backgroundColor:note.color}} onChange={takeDescription} className='notetwo' placeholder='Take a note...'/>
      </div>
      <div className="last-row-container">
        <div className="left-icons">
        <AddAlertOutlinedIcon fontSize='small'/>
        <PersonAddAltOutlinedIcon fontSize='small'/>
        <Colorpopper action="create" setNotes={setNotes} />
        <ImageOutlinedIcon fontSize='small'/>
        <ArchiveOutlinedIcon fontSize='small' onClick={makeArchived}/>
        <DeleteOutlinedIcon fontSize='small'/>
        <MoreVertOutlinedIcon fontSize='small'/>
        
        </div>
        <div className="close">
        <h3 className='close-h3' style={{color:"black"}} onClick={()=>{submit(); redirectTakeOne()}}>Close</h3>
        </div>
         
      </div>
    </div> */}