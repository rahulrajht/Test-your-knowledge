const CHOOSE_LANGUAGE = 'CHOOSE_LANGUAGE'
const CHOOSE_LEVEL = 'CHOOSE_LEVEL'
const CHOOSE_NO_OF_QUESTIONS = 'CHOOSE_NO_OF_QUESTIONS'
const INC_SCORE = 'INC_SCORE'
export const quizReducer = (state = {questions:[] },action) =>{
    const data = action.payload
    switch(action.type){
        case CHOOSE_LEVEL:
            
            return{
                ...state,
                level:data
            }
        case CHOOSE_LANGUAGE:
            return{
                ...state,
                language:data
            }
        
        case CHOOSE_NO_OF_QUESTIONS:
            return{
                ...state,
                noofquestions:data
            }
        default:
            return state;     
    }
}

export const scoreReducer = (state = {} , action) =>{
    switch(action.type){
        case INC_SCORE:
            return{
                score:  action.payload
            }
        default :
        return{
            score:0
        }    
    }
}