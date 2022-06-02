import { defaultListboxReducer } from "@mui/base"

const paginate = (follows) =>{
    const itemsPPage = 10
    const numOfPages = Math.ceil(follows.length / itemsPPage)

    const newFollows = Array.from({length:numOfPages},(_,i)=>{
        const start = i * itemsPPage
        return follows.slice(start,start +itemsPPage)
    })
    return newFollows
}
export default paginate