import React from 'react'
 
import Button from '@mui/material/Button';
const List = ({name, email, index}) => {
  return (
    <div className='list'>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Button color="error">
            <DeleteIcon/>
        </Button>
       
    </div> 
  )
}

export default List
