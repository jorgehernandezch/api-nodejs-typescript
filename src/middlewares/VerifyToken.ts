import { Response, Request, NextFunction } from "express"
import jwt from 'jsonwebtoken'

export const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Autorization')

  if (!token) return res.status(401).json({ 'message': 'Acesso Denegado' })
  const payload = jwt.verify(token, process.env.SECRET_JWT || 'GA')
  console.log(payload)

  next();
}