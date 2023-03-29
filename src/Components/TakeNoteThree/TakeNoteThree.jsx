// import * as React from 'react';
import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Colorpopper from '../colorpopper/Colorpopper';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { UpdateArchiveService, DeleteService } from '../../services/Dataservices';
import { fontStyle } from '@mui/system';
import Grid from "@mui/material/Grid";
import './TakeNoteThree.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TakeNoteThree({noteobj,UpdateColor}) {
      console.log(noteobj)
      const [archiveData, setArchiveData] = useState({noteIdList:"",isArchived:false})
      const updateArchive = async() => {
      let archivedata = {noteIdList:[noteobj.id],isArchived:true}
      let response = await UpdateArchiveService(archivedata)
       console.log(response)
      }

      const DeleteNote = async() => {
        let deletedata = {noteIdList:[noteobj.id],isDeleted:true}
        let response = await DeleteService(deletedata)
        console.log(response)
      }

  return (
      

    <Grid item container spacing={0} xs={12} sm={6} md={4} lg={3} >
    <Card sx={{ minWidth: 250 }} style={{backgroundColor:noteobj.color}}>
      <CardContent>
        {/* title */}
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
        <div>{noteobj.title}</div>
        </Typography>
        {/* Description */}
        <Typography sx={{ fontSize: 16 }} variant="h6">
            <div className='desc-container'>{noteobj.description}</div>
          </Typography>
      </CardContent>
      <CardActions className='icon-container'>
        <AddAlertOutlinedIcon fontSize='small'/>
        <PersonAddAltOutlinedIcon fontSize='small'/>
        <Colorpopper action="update" noteid={noteobj.id} UpdateColor={UpdateColor}/>
        <ImageOutlinedIcon fontSize='small'/>
        <ArchiveOutlinedIcon  fontSize='small' onClick = {updateArchive}/>
        <DeleteOutlinedIcon fontSize='small' onClick={DeleteNote}/>
        <MoreVertOutlinedIcon fontSize='small'/>


        {/* <Button size="smaller"><AddAlertOutlinedIcon fontSize='small'/></Button>
        <Button size="smaller"><PersonAddAltOutlinedIcon fontSize='small'/></Button>
        <Button size="smaller"><Colorpopper action="update" noteid={noteobj.id} UpdateColor={UpdateColor}/></Button>
        <Button size="smaller"><ImageOutlinedIcon fontSize='small'/></Button>
        <Button size="smaller"><ArchiveOutlinedIcon  fontSize='small' onClick = {updateArchive}/></Button>
        <Button size="smaller"><DeleteOutlinedIcon fontSize='small' onClick={DeleteNote}/></Button>
        <Button size="smaller"><MoreVertOutlinedIcon fontSize='small'/></Button> */}
      </CardActions>
    </Card>
    </Grid>
  );
}







// import React from 'react';
// import './TakeNoteThree.css';
// import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
// import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
// import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
// import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
// import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import Colorpopper from '../colorpopper/Colorpopper';
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import { UpdateArchiveService, DeleteService } from '../../services/Dataservices';
// import { fontStyle } from '@mui/system';

// function TakeNoteThree({noteobj,UpdateColor}) {
//   // console.log(noteobj)
//   // const [archiveData, setArchiveData] = useState({noteIdList:"",isArchived:false})
//   const updateArchive = async() => {
//     let archivedata = {noteIdList:[noteobj.id],isArchived:true}
//     let response = await UpdateArchiveService(archivedata)
//     console.log(response)
//   } done

  // const DeleteNote = async() => {
  //   let deletedata = {noteIdList:[noteobj.id],isDeleted:true}
  //   let response = await DeleteService(deletedata)
  //   console.log(response)
  // }

//   return (
//     <div className='note-three-container' style={{backgroundColor:noteobj.color}}>
//        <div className="row-title">
//         <h3 className='note3-title'>{noteobj.title}</h3>
//         <PushPinOutlinedIcon fontSize='small'/>
//       </div>
//       <div className="middle-input">
//         <p>{noteobj.description}</p>
//       </div>
//       <div className="row-icon">
//         <AddAlertOutlinedIcon fontSize='small'/> done
//         <PersonAddAltOutlinedIcon fontSize='small'/> done
//         <Colorpopper action="update" noteid={noteobj.id} UpdateColor={UpdateColor}/>
//         <ImageOutlinedIcon fontSize='small'/>
//         <ArchiveOutlinedIcon  fontSize='small'onClick = {updateArchive} />
//         <DeleteOutlinedIcon fontSize='small' onClick={DeleteNote} />
//         <MoreVertOutlinedIcon fontSize='small'/>
//       </div>
//     </div>
//   )
// }

// export default TakeNoteThree
