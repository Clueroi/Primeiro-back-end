import * as express from 'express'

import userController from './modules/user/userController'
import postController from './modules/post/postController'

const app = express()

app.get('/', (req, res)=>{
  res.send('hello world')
})

app.use('/user', userController)
app.use('/post', postController)



app.listen(3000, function(){console.log('online, acesse o servidor: http://localhost:3000')})