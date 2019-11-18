import express, { Request, Response } from "express";

export function start(): any {
  const app = express();
  const port: number = 3000;

  app.get('/', (req: Request, res: Response) => {
    res.send("Hello world!");
  })

  app.listen(port, () => {
    console.log(`Server is running on ${port}`)
  })

}

start();

export function helloWorld(lang = 'Typescript'): string {
  return `🦁 I love ${lang}!`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function devNull(): any {
  return { hello: 'Efrei' }
}

console.log(helloWorld())
