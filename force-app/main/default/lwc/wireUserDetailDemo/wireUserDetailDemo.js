import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
const fields = [NAME_FIELD, EMAIL_FIELD];

export default class WireUserDetailDemo extends LightningElement {
    userId = Id; //'0058a00000LW1weAAD'
    userDetailFunction;

    //@wire(getRecord, {recordId: Id, fields: [NAME_FIELD, EMAIL_FIELD]})
    @wire(getRecord, {recordId: '$userId', fields})
    userDetailHandler({data, error}){
        if(data){
            this.userDetailFunction = data.fields;
        }
        if(error){
            console.log(error);
        }
    }

    @wire(getRecord, {recordId: '$userId', fields: [NAME_FIELD, EMAIL_FIELD]})
    userDetailProperty;
}