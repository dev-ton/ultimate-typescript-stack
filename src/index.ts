import express from 'express'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({
        hello: 'tonyleejonesii'
    })
})

const port = Number(process.env.PORT || 8080)
// 0.0.0.0 host is a must when we run the app in docker
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is listening on port ${port}`)
})