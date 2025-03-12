import { Typography, Box, Chip } from "@mui/material";
import { ReactElement, FC } from "react";
import { ITaskHeader } from "./interfaces/ITaskHeader";
import { format } from 'date-fns';

export const TaskHeader:FC<ITaskHeader> = (props):ReactElement => {
    const {
        title="Test title",
        date=`${format(new Date(), 'PPP')}`
    } = props
    return(
        <Box
            display="flex"
            width="100%"
            justifyContent="space-between"
            md={4}
        >
            <Box>
                <Typography variant="h6">{title}</Typography>
            </Box>
            <Box>
                <Chip  
                    variant="outlined"
                    label={date}
                />
            </Box>
        </Box>
    )

}