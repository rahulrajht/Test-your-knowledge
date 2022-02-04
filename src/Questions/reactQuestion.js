export const EASY_REACT_QUESTIONS =[
    {
        q:"What is React.js?",
        options:["Open-source JavaScript back-end library","JavaScript front-end library to create a database","Free and open-source JavaScript front-end library","None of the mentioned"],
        ans:3
    },
    {
        q:" Which of the following acts as the input of a class-based component?",
        options:["Class","Props","Factory","None of the mentioned"],
        ans:2
    },
    {
        q:"React.js is written in which of the following language?",
        options:["C","C++","JavaScript","Java"],
        ans:3
    },
    {
        q:"How many elements can a valid react component return?",
        options:["React does not return element","1 Element","More than 1 element","None of the mentioned"],
        ans:2
    },
    {
        q:"In which of the following directory React Components are saved?",
        options:["Inside js/components/"," Inside components/js/","Inside vendor/js/components/","Inside vendor/components/"],
        ans:1
    },
]

export const MEDIUM_REACT_QUESTIONS = [
    {
        q:"Which of the following command is used to Install create-react-app?",
        options:["npm install create-react-app","npm install -f create-react-app","npm install -g create-react-app","install -g create-react-app"],
        ans:3
    },
    {
        q:"In which condition is the React.js Lifecycle method static getDerivedSateFromProps(props, state) is called?",
        options:["When the state of the component is updated","When a component is created for the first time","Both of the mentioned","None of the mentioned"],
        ans:3

    },
    {
        q:"Which of the following is method is not a part of ReactDOM?",
        options:["ReactDOM.hydrate()","ReactDOM.destroy()","ReactDOM.createPortal()","All of the mentioned"],
        ans:2
    },
    {
        q:"Which of the following is correct about prop in react?",
        options:["Can be changed inside another component","Can be changed inside the component","Cannot be changed in the component","All of the mentioned"],
        ans:3
    },
    {
        q:"Which of the following is used to pass data to a component from outside in React?",
        options:["props","render with arguments","setState","PropTypes"],
        ans:1
    },
    {
        q:"What is used in ReactJs to increase performance ?",
        options:["Both B and c"," Original DOM "," Virtual DOM "," None of the above "],
        ans:3
    },
    {
        q:"In React what is used to pass data to a component from outside? ",
        options:["setState","render with arguments","props","PropTypes"],
        ans:3
    },
    {
        q:"How can you access the state of a component from inside of a member function? ",
        options:["this.getState()","this.values","this.prototype.stateValue","this.state"],
        ans:2
    },
    
    {        
        q:"helps react for keeping their data unidirectional",
        options:["JSX","Flux","Dom","Props"],
        ans:2
    },
    {
        q:"Arbitrary inputs of components are called ? ",
        options:["Ref","Keys","Props","Elements"],
        ans:3
    }
]

export const ADVANCE_REACT_QUESTIONS = [
    {
        q:"15. Keys are given to a list of elements in react. These keys should be - ",
        options:["Do not requires to be unique","Unique in the DOM","Unique among the siblings only","All of the above"],
        ans:3
    },
    {
        q:"Which of the following is the correct data flow sequence of flux concept? ",
        options:["Dispatcher->Action->Store->View","Action->Dispatcher->View->Store","Action->Dispatcher->Store->View","Action->Store->Dispatcher->View"],
        ans:3
    },
    {
        q:"Which of the following is method is not a part of ReactDOM?",
        options:["ReactDOM.hydrate()","ReactDOM.destroy()","ReactDOM.createPortal()","All of the mentioned"],
        ans:2
    },
    {
        q:" Which of the following acts as the input of a class-based component?",
        options:["Class","Props","Factory","None of the mentioned"],
        ans:2
    },
    {
        q:"Which of the following is a must API for every React.js component?",
        options:["SetinitialComponent","renderComponent","render","All of the above"],
        ans:2
    },
    {
        q:"What will happen if you render an input element with disabled = {false}?",
        options:["It will be rendered as disabled","It will not be rendered at all","It will be rendered as enabled","You cannot set it false"],
        ans:3
    },
    {
        q:"Which of the following lifecycle events React components have at the highest level?",
        options:["Destruction","Initialization","State/Property Updates","All of the above"],
        ans:4
    },
    {
        q:"Why is the usage of setState?",
        options:["nvoke code after the setState operation is done.","Replace the state completely instead of the default merge action.","Access the previous state before the setState operation.","None of the above."],
        ans:1
    },
    {
        q:"Which of the following best defines the key prop?",
        options:["Key prop is used to look pretty, and there is no benefit whatsoever.","Key prop is a way for React to identify a newly added item in a list and compare it during the diffing algorithm.","It is one of the attributes in HTML.","It is NOT commonly used in an array."],
        ans:2
    },
    {
        q:"Which of the following method is not a part of ReactDOM?",
        options:["ReactDOM.destroy()","ReactDOM.hydrate()","ReactDOM.createPortal()","ReactDOM.findDOMNode()"],
        ans:1
    },
    
    {
        q:"How can you set a default value for an uncontrolled form field?",
        options:["By using the value property","By using the defaultValue property","By using the default property","It is assigned automatically."],
        ans:2
    },
    
    {
        q:"We can update the state in React.js by calling to setState() method. These calls are:",
        options:["Synchronous in nature.","Asynchronous in nature.","Are asynchronous but can be made synchronous when required.","None of the above."],
        ans:2
    },
    
    {
        q:"Which of the following statement is true for controlled components in React.js?",
        options:["The source of truth is DOM.","The source of truth can be anything.","The source of truth is a component state.","None of the above."],
        ans:3
    },
    {
        q:"What changes would appear in the component as soon as the state of the React component is changed?",
        options:["t will do nothing; you have to call render method to render the component again.","It will re-render the component.","It can be created again from scratch.","None of the above."],
        ans:2
    },
    {
        q:"Which of the following statement is true for uncontrolled components in React.js?",
        options:["The source of truth is DOM.","The source of truth is a component state.","The source of truth can be anything.","None of the above."],
        ans:1
    }
]