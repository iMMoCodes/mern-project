import { ChatEngine } from 'react-chat-engine'
require('dotenv').config()

import './styles.css'

const Chat = () => {
	return <ChatEngine height='100vh' projectID={process.env.CHAT_PROJECT_ID} userName={process.env.CHAT_USERNAME} userSecret={process.env.CHAT_SECRET} />
}

export default Chat
