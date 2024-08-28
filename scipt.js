const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

let userName = prompt('What is your name?')
socket.emit('new-user', userName)



socket.on('chat-message', data => {
    appendMessage(data)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

const appendMessage = (message) => {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}



    appendMessage('Welcome ' + userName)    


