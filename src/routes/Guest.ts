import express from 'express'
import { Index } from '../controllers/GuestController'

const router = express.Router()

router.get('/', Index)

export default router