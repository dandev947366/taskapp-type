import { IDisable } from "./IDisable";
import { SelectChangeEvent } from "@mui/material";

export interface ISelectItems{
    value: string;
    label: string;
}
export interface ISelectField extends IDisable{
    name?: string;
    label?: string;
    value?: string;
    onChange?: (e: SelectChangeEvent) => void;
    items?: ISelectItems[]
}