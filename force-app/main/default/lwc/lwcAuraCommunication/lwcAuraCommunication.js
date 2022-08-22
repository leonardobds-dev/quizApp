import { api, LightningElement } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title;

    callAura(){
        const event = new CustomEvent('sendmsg', {
            detail:{
                "msg":"Hello FROM LWC"
            }
        })
        this.dispatchEvent(event);
    }
}