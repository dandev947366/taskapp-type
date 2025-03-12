import { ReactElement, FC } from "react";
import { Typography, Box } from "@mui/material";
import { ITaskDescription } from "./interfaces/ITaskDescription";

export const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
    const {description="description"} = props
    return(
        <Box>
            <Typography>{description}</Typography>
        </Box>
    )
}