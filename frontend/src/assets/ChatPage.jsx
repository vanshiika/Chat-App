import { PrettyChatWindow,} from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    return( <div style= {{ height: '100vh'}}>
        <PrettyChatWindow
        projectId='7a731585-15e5-4205-8e70-0a6e73172d56'
        username={props.user.username}
        secret={props.user.secret}
        style={{height : '100%'}}
        />
    </div>
    )
}

export default ChatsPage