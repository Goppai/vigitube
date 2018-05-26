import { search } from './functions'

describe('search()', () => {
  it('resolves to an array containing 5 objects with expected properties', async () => {
    const arr = await search()
    const expectedArray = [1, 2, 3, 4, 5].map(() => ({
      id: {
        videoId: expect.anything()
      },
      snippet: {
        title: expect.anything(),
        channelTitle: expect.anything(),
        description: expect.anything()
      }
    }))
    expect(arr).toMatchObject(expectedArray)
  })
})
