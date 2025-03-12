import { IDisable } from "./IDisable";

export interface IDateField extends IDisable{
    value?: Date | null
    onChange?: (date: Date | null) => void
}