import {Router} from 'express'

import { signup } from './userService'

const router = Router()

router.post('/signup', (req, res) => {
    res.send('SIGN UP/')
  })
  
router.post('/login', (req, res) => {
    res.send('LOGIN/')
  })

export default router 