import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { UpdateColor } from '../../services/Dataservices';

export default function Colorpopper({action,setNotes,noteid}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  //select create , update color
  const selectColor=async(color)=>{
     if(action==="create"){
        setNotes((prev)=>({...prev,color:color}))
     }
     else if(action==="update"){
        console.log("Update")
        let data = {noteIdList:[noteid],color:color}
        let response = await UpdateColor(data)
        console.log(response)
     }
  }
    //colors array - notes back-ground color
   const colors = ["#2ECC71","#AF7AC5","#F1948A","#A3E4D7","#F5B7B1","#F5B041","#DC7633","#F1C40F","#AAB7B8","#F1948A","#2ECC71","#F5B041"]

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <ColorLensOutlinedIcon fontSize='small' onClick={handleClick}/>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:"flex" }}>
          {
            colors.map((uu)=>(<div onClick={()=>selectColor(uu)} style={{backgroundColor:uu,height:28,width:28,margin:4,borderRadius:50}}></div>))
          }
        </Box>
      </Popper>
    </div>
  );
}