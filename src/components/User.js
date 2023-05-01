import React from 'react'
import './user.css'
import { Button,Text,HStack} from '@chakra-ui/react'

const Todos = ({id,title, completed ,onDelete,OnEdit,onUpdate,onAdd}) => {

    const handleDelete = () => {
        onDelete(id);
    }
    const edit = () => {
        OnEdit(id)
    }
    const add = () => {
        onAdd (title,completed)
    }
    const update = () =>{
        onUpdate(id)
    }

    return (
        <div class='list'>
  <HStack>
  <Text fontSize='sm'>{title}  </Text>
  <Text fontSize='sm'>{completed}  </Text>
</HStack>
            <span>
            <Button class="mr-1" onClick={add}>create</Button>

                <Button onClick={handleDelete}>delete</Button>
                <Button onClick={edit}>edit</Button>
                <Button onClick={update}>update</Button>
            </span>
        </div>
    )
}

export default Todos
