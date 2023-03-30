import sum from '../../src/utils/sum'

describe('sum', () => {
  it('可以做加法', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})
