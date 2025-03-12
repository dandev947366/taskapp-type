import { ReactElement, FC } from "react";
import {Box} from '@mui/material'
import { TaskHeader } from "./_taskHeader";
import { TaskDescription } from "./_taskDescription";
import { TaskFooter } from "./_taskFooter";
import { renderBoderColor } from "./helpers/renderBorderColor";
import { ITask } from "./interfaces/ITask";
import { Priority } from "../createTaskForm/enums/Priority";
import { Status } from "../createTaskForm/enums/Status";
import { format } from 'date-fns';
export const Task:FC<ITask> = (props):ReactElement => {
    
    const { 
        title='Test Title',
         date= `${format(new Date(), 'PPP')}`,
         description= 'Lorem ipsum',
        priority = Priority.high,
        status = Status.completed,
        onStatusChange=(e)=>console.log(e),
        onClick=(e)=>console.log(e)
    } = props
    
    return (
    <Box
        // display="center"
        // width="100%"
        // justifyContent="center"
        // flexDirection="column"
        mb={4}
        ml={10}
        mr={10}
        p={2}
        sx={{
            backgroundColor:'background.paper',
            borderRadius: '8px',
            border: '1px solid',
            borderColor: renderBoderColor(priority)
        }}
    >
    <TaskHeader title={title} date={date}/>
    <TaskDescription description={description}/>
    <TaskFooter onStatusChange={onStatusChange} onClick={onClick}/>
    </Box>
    )

}