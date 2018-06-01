import { search, loadMore } from './functions'

describe('search()', () => {
  it('resolves to an object with - an array containing 3 objects with expected properties; nextPageToken', async () => {
    const res = await search()
    const expectedArray = [1, 2, 3].map(() => ({
      id: {
        videoId: expect.anything()
      },
      snippet: {
        title: expect.anything(),
        channelTitle: expect.anything(),
        description: expect.anything()
      }
    }))
    expect(res.items).toMatchObject(expectedArray)
    expect(typeof res.nextPageToken).toBe('string')
  })
})

describe('loadMore()', () => {
  it('resolves to an object with - an array containing 7 objects with expected properties; nextPageToken', async () => {
    const res = await loadMore('CAMQAA')
    const expectedArray = [1, 2, 3, 4, 5, 6, 7].map(() => ({
      id: {
        videoId: expect.anything()
      },
      snippet: {
        title: expect.anything(),
        channelTitle: expect.anything(),
        description: expect.anything()
      }
    }))
    expect(res.items).toMatchObject(expectedArray)
    expect(typeof res.nextPageToken).toBe('string')
  })
})
