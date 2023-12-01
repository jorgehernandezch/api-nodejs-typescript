import { Request, Response } from "express"

export const Index = (_req: Request, res: Response) => {
  res.send('NODEJS API - Express - Typescript')
}
