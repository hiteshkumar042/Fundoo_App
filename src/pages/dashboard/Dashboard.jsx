import React,{useState} from 'react'
import './Dashboard.css'
import HeaderComp from '../../Components/header/HeaderComp';
import TakeNoteOne from '../../Components/TakeNoteOne/TakeNoteOne';
import TakeNoteTwo from '../../Components/TakeNoteTwo/TakeNoteTwo';
import TakeNoteThree from '../../Components/TakeNoteThree/TakeNoteThree';
import { getNotes } from '../../services/Dataservices';
import NavDrawer from '../../Components/NavDrawer/NavDrawer';

function Dashboard() {
    const [toggles, setToggle] = useState(true)
    const [notes, setNotes] = useState([])
    const [open, setOpen] = React.useState(false);
    const[typeOfNotes,setTypeOfNotes] = React.useState('Notes')

  const handleDrawer = () => {
    setOpen(!open);
  };

 
    const listenTakeNoteOne=()=>{
        setToggle(false);
    }

    const listenTakeNoteTwo=()=>{
        setToggle(true);
    }
    const loaddata = async () => {
        let response = await getNotes()
        let arr = response.data.data.data
        if(typeOfNotes === 'Notes') {

          let newArr = arr.filter((note)=>note.isArchived === false && note.isDeleted===false)
          setNotes(newArr)
 
        } else if(typeOfNotes === 'Archive') {
          let newArr = arr.filter((note)=>note.isArchived === true && note.isDeleted===false)
          setNotes(newArr)
        }
        else if(typeOfNotes === 'Trash') {
          let newArr = arr.filter((note)=>note.isArchived === false && note.isDeleted===true)
          setNotes(newArr)
        }
    
      }
      React.useEffect(() => {
        loaddata()
      }, [typeOfNotes])
      console.log(notes)

    return (
    <div>
        <HeaderComp handleDrawer={handleDrawer}/>
        <NavDrawer open={open} setTypeOfNotes={setTypeOfNotes}/>
        {
            toggles?<TakeNoteOne PropListenTakeNoteOne={listenTakeNoteOne}/>:<TakeNoteTwo PropListenTakeNoteTwo={listenTakeNoteTwo} />
        }      
        <div className='flex'>
        {
          notes.map((noteobj) => (<TakeNoteThree noteobj={noteobj} />))
          
        }
        </div>
     
     
    </div>
  )
}

export default Dashboard
