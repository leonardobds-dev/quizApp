import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetObjectInfoDemo extends LightningElement {

    defaultRecordTypeId_Field;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;

    // @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    // objectInfo({data, error}){
    //     if(data){
    //         console.log(data);
    //         this.defaultRecordTypeId_Field = data.defaultRecordTypeId;
    //     }
    //     if(error){
    //         console.log(error);
    //     }
    // }
}