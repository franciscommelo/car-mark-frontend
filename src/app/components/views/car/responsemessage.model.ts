import { Data } from './data.model';

export interface ResponseMessage{
    message : String;
    staus : String;
    code : String;
    data : Data;
    developerMessage : String;
}