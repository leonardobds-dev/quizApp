import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {}; // for storing answers

    myQuestions = [
        {
            id: 'Question1',
            question: 'Which one of the following is not a template loop',
            answer: {
                a: 'for:each',
                b: 'iterator',
                c: 'map loop'
            },
            correctAwnser: 'c'
        },
        {
            id: 'Question2',
            question: 'Which one of the file is invalid in LWC component folder',
            answer: {
                a: '.svg',
                b: '.apex',
                c: '.js'
            },
            correctAwnser: 'b'
        },
        {
            id: 'Question3',
            question: 'Which one of the following is not a directive?',
            answer: {
                a: 'for:each',
                b: 'if:true',
                c: '@track'
            },
            correctAwnser: 'c'
        }
    ]

    changeHandler(event){
        console.log('name', event.target.name)
        console.log('value', event.target.value)

        const {name, value} = event.target;
        // const name = event.target.name;
        // const value = event.target.value;

        this.selected = {...this.selected, [name]:value};
        // this.selected = {...this.selected, ['Question1']:'a'};
    }

    submitHandler(){

    }

    resetHandler(){
        
    }    
}