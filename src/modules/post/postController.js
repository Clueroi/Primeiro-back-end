import {Router} from 'express'

const router = Router()

router.post('/', (req, res) =>{
    res.send('POST/')
})

router.get('/:id?', (req, res) =>{
    res.send('GetId/')
})

export default router