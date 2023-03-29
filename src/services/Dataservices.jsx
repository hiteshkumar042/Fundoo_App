import axios from 'axios'

const headerConfig = {
    headers : {
        Authorization: localStorage.getItem('token')
    }
}

export const createNote = async(obj) => {
    console.log(headerConfig)
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",obj,headerConfig)
    return response
}

export const getNotes = async() =>{
    let response = await axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",headerConfig)
    return response;
}

export const UpdateColor = async(data) =>{
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",data,headerConfig)
    return response;
}

export const UpdateArchiveService = async(data) =>{
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",data,headerConfig)
    return response;
}
export const DeleteService = async(data) =>{
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",data,headerConfig)
    return response;
}