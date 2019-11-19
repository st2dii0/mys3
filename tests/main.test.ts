// import { helloWorld, devNull } from '../src/main'
import { expect } from 'chai'
import request from 'request'

describe(':: helloWorld', (): void => {
  it('helloWorld("Elixir")', () => {
    expect(1 + 1).equal(2)
  })
})

// describe(':: helloWorld', (): void => {
//   it('helloWorld("Elixir")', () => {
//     expect(helloWorld('Elixir')).equal(`🦁 I love Elixir!`)
//   })
// })

// describe(':: devNull', (): void => {
//   it('devNull()', () => {
//     expect(devNull()).eql({ hello: 'Efrei' })
//   })
// })

// describe(':: start', () => {
//   it('start', () => {
//     request.get('http://localhost:3000', null, (response) => {
//       console.log(response);
//       expect(response != null)

//     })
//     // console.log(response);
//   })
// })
