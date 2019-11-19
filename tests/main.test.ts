import { helloWorld, devNull, start } from '../src/main'
import { expect } from 'chai'
import request from 'request'

describe(':: helloWorld', (): void => {
  it('helloWorld("Elixir")', () => {
    expect(helloWorld('Elixir')).equal(`🦁 I love Elixir!`)
  })
})

describe(':: devNull', (): void => {
  it('devNull()', () => {
    expect(devNull()).eql({ hello: 'Efrei' })
  })
})

describe(':: start', () =>{
  it('start', async () => {
    const server = start();
    const response = await request.get('localhost:3000/', server, ()=>{
      console.log("It's not failing :D");
      
    })
    // console.log(response);
  })
  expect(start())
})
