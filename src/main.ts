import express, { Request, Response } from 'express'
import {Server} from 'http'


export function start(): Server {
  const app = express()
  const port: number = 3000

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!')
  })

  const server: Server = app.listen(port, () => {
    console.log(`Server is running on ${port}`)
  })

  return server;
}

//start()

export function helloWorld(lang = 'Typescript'): string {
  return `🦁 I love ${lang}!`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function devNull(): any {
  return { hello: 'Efrei' }
}

console.log(helloWorld())
