import { io } from "socket.io-client"

const chatMiddleware = (store) => (next) => (action)  => {
  const socket = io(process.env.REACT_APP_API_URL)

  if (action = '?') {
    socket.on('new_message', (message) => {
        console.log(message)
      })
  }

  
}

export default chatMiddleware