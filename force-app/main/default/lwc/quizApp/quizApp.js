import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {}; // for storing answers
    correctAnswers = 0; // to show the number of correct aswers
    isSubmitted = false; // use to show the result

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

    // used for disabling the submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    // for applying dynamic styling to our result
    get isScoreFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers 
            ? 'slds-text-color_success' 
            : 'slds-text-color_error'}`
        ;
    }

    // changeHandler get's called on every click on the options
    changeHandler(event){
        // console.log('name', event.target.name)
        // console.log('value', event.target.value)

        const {name, value} = event.target;
        // const name = event.target.name;
        // const value = event.target.value;

        this.selected = {...this.selected, [name]:value};
        // this.selected = {...this.selected, ['Question1']:'a'};
    }

    // form submit handler
    submitHandler(event){
        event.preventDefault();
        // this.selected = {'Question1':'a', 'Question1':'b', 'Question1':'c'}
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAwnser);
        this.correctAnswers = correct.length;
        this.isSubmitted = true;
        //console.log('this.correctAnswers', this.correctAnswers);
    }

    // form reset handler
    resetHandler(){
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
}