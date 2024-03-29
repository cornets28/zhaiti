import { ChangeEventHandler } from "react";

export type MemeFormType = {
    text: string;
    text2: string;
    imageSizeInfo: string;
    uploadFileText: string;
    buttonText: string;
    textLimit: number;
    textLimitCount: any;
    uploadedImage: any;
    handleImageChange: any;
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onSubmit?: any;
}