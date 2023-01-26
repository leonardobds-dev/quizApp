import { LightningElement } from 'lwc';
import getContactsList from '@salesforce/apex/ContactController.getcontactList';

export default class SearchContacts extends LightningElement {
    mysearchvalue;
    contactRecresult;

    handleSearch(event){
        this.mysearchvalue = event.target.value;
        console.log('mydata ' +this.mysearchvalue);
    }
    //Call Apex class method
    handleRecordSearch(){

        //alert('in my handleRecordSearch===> '+this.mysearchvalue);

        if(this.mysearchvalue !== ''){
            getContactsList({ 
                searchkey : this.mysearchvalue
            })
            .then(result => {
                this.contactRecresult = result;
            })
            .catch(error => {
                this.contactRecresult = null;
            });
        }
    }
}