import { Request, Response } from "express"
import jwt from 'jsonwebtoken'

export const Login = (_req: Request, res: Response) => {

  const token = jwt.sign({ client: 'sistemas@galpha.co' }, process.env.SECRET_JWT || 'GA', {
    'expiresIn': 31536000
  })
  res.json(token)
}
