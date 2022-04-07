let initialShow={show:false}
const LoginLogout=(state=initialShow,action)=>{
    switch(action.type){
        case "LOGIN":return {show:state.show=true}
        case "LOGOUT":return {show:state.show=false}
        default:return state;
    }
}

export default LoginLogout;


let initialOperation={count:0}
export const OperationCounter=(state=initialOperation,action)=>{
    switch(action.type){
        case "INCREMENT":return {count:state.count+1}
        case "DECREMENT":return {count:state.count-1}
        case "RESET":return {count:state.count=0}
        default:return state
    }

}
