import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
const auth = require('@feathersjs/authentication-client')
import { AsyncStorage } from 'react-native'

const socket = io('localhost:3010', { // Change to API_BASE_URL
  transports: ['websocket'],
  forceNew: true
})

const app = feathers();

app.configure(socketio(socket))
  .configure(auth({
    storage: AsyncStorage,
    storageKey: 'auth'
  }))

app.service("users").create({ userName: 'dorin', password: 'dorin' })

export { app as default }
