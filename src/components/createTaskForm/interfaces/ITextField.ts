import { IDisable } from "./IDisable";

export interface ITextField extends IDisable {
    onChange?: (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => void
}