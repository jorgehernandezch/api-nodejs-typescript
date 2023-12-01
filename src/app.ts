import express, { Application } from 'express'
import cors from 'cors'
import GuestRoutes from './routes/Guest'
import AuthRoutes from './routes/Auth'
import ApiRoutes from './routes/Api'

const app: Application = express();

//settings
app.set('PORT', process.env.PORT);

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/', GuestRoutes)
app.use('/auth', AuthRoutes)
app.use('/api', ApiRoutes)

export default app;