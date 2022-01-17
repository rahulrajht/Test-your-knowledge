const CHOOSE_LANGUAGE = 'CHOOSE_LANGUAGE'
const CHOOSE_LEVEL = 'CHOOSE_LEVEL'
const CHOOSE_NO_OF_QUESTIONS = 'CHOOSE_NO_OF_QUESTIONS'
const INC_SCORE = 'INC_SCORE';
export const saveLanguageDetails = (data) =>(dispatch) =>{
    dispatch({
        type:CHOOSE_LANGUAGE,
        payload:data,
    })
    localStorage.setItem('language' , JSON.stringify(data))
} 

export const saveLevelDetails = (data) => (dispatch) =>{
    dispatch({
        type:CHOOSE_LEVEL,
        payload:data,
    })
    localStorage.setItem('level' , JSON.stringify(data))

}
export const saveNoQusDetails = (data) => (dispatch) =>{
    dispatch({
        type:CHOOSE_NO_OF_QUESTIONS,
        payload:data,
    })
    localStorage.setItem('NoOfQuestions' , JSON.stringify(data))

}
export const incrementScore = () => (dispatch,getState) =>{
    const {score } = getState().scoreReducer
    dispatch({
        type:INC_SCORE,
        payload: score + 10
    })
}