import express from 'express'

const postRouter = express.Router()

postRouter.get('/post',(reg, res) =>{
    console.log('hent aller poster')
})

export {postRouter}