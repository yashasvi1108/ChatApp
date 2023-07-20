import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage =(props) =>{
    
    return (<div style={{height:'100vh'}}>

        <PrettyChatWindow
            projectId='5654e40f-4f16-46f3-80dd-e92809e04106'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
        />
    </div>
    )
}
export default ChatsPage