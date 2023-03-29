import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './TakeNoteOne.css'
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

export default function TakeNoteOne(props) {
  const redirectTakeTwo=()=>{
    props.PropListenTakeNoteOne()
  }
  return (
    <div className="note-one-main">
      <Box className="note-one-container"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          minWidth: 280,
          height: 50,
        },
      }}
      onClick={redirectTakeTwo}
    >
      <Paper elevation={4} className="note-one-items" >
      <input type="text"  placeholder='Take a note... 'className='input-note-one'/>
      <div className="note-one-icon">
      <IconButton ><ImageOutlinedIcon color='action'/></IconButton>
      <IconButton><BrushOutlinedIcon color='disabled'/></IconButton>
      <IconButton><ImageOutlinedIcon color='action'/></IconButton>
      </div>
      
      </Paper>
      
    </Box>
    </div>
    
  );
}





// import React from 'react'
// import './TakeNoteOne.css'
// import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
// import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

// export default function TakeNoteOne(props) {
  
  // const redirectTakeTwo=()=>{
  //   props.PropListenTakeNoteOne()
  // }
//   return (
//     <div className='noteone-fullwidth'>
//       <div className="noteone-main-container" onClick={redirectTakeTwo}>
//         <div className="input-container">
//         <input type="text" placeholder='Take a note...' />
//         </div>
//         <div className="noteone-icon-container">
//             <div className="check-box">
//             <CheckBoxOutlinedIcon color='action'/>
//             </div>
//             <div className="drawing">
//             <BrushOutlinedIcon color='disabled'/>
//             </div>
//             <div className="gallery">
//             <ImageOutlinedIcon color='action'/>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }
