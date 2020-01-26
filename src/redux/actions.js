import Type from "../redux/types";

export  const addContact = (contact)=> ({
    type: Type.ADD_CONTACT,
    payload: contact
})

export  const deleteContact = (id)=> ({
    type: Type.DELETE_CONTACT,
    payload: id
})

export const setAllContacts = (contacts)=> ({
    type: Type.SET_ALL_CONTACTS,
    payload: contacts
})

export const setFilter = (value) => ({
    type: Type.SET_FILTER,
    payload: value
})