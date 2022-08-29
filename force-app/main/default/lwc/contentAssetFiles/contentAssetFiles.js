import { LightningElement } from 'lwc';
import PERSONAL_CV from '@salesforce/contentAssetUrl/CVLeonardoBritopdf';
import TYPESCRIPT_FILE from '@salesforce/contentAssetUrl/typescripthandbookbetapdf';

export default class ContentAssetFiles extends LightningElement {
    file = TYPESCRIPT_FILE;
    personalCv = PERSONAL_CV;
    //file = '';
}