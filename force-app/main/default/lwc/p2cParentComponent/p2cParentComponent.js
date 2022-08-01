import { api, LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    
    carouselData = [
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header: "First Card",
            description: "First card description."
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header: "Second Card",
            description: "First card description."
        },
        {
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header: "Thirty Card",
            description: "First card description."
        }
    ];

    percentage = 10;

    changeHandler(event){
        this.percentage = event.target.value;
    }

}