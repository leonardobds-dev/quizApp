import { LightningElement } from 'lwc';
import ID_FROM from '@salesforce/user/Id';
import IS_GUEST from '@salesforce/user/isGuest';

export default class UserInformation extends LightningElement {

    userId = ID_FROM;
    isGuest = IS_GUEST;

}