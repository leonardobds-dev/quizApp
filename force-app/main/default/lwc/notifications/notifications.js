import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Notifications extends LightningElement {

    toastHandlerOne(){
        this.showToast('Success!!', '{0} Account Creation!! {1}', 'success');
    }

    toastHandlerTwo(){
        this.showToast('Error!!', 'Account Creation Failed!!', 'error');
    }

    toastHandlerThree(){
        this.showToast('Warning!!', 'Password have 15 characters', 'warning');
    }

    toastHandlerFour(){
        this.showToast('Info!!', 'Summer 20 realease is available!!', 'info');
    }

    showToast(title, message, variant){
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
                'Salesforce', {
                    url: 'https://www.salesforce.com',
                    label: 'Click Here'
                }
            ],
            mode: 'stick'
        });
        this.dispatchEvent(event);
    }

}