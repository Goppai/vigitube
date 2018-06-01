import { search, loadMore } from './functions'

describe('YouTube search functions', () => {
  function expectVideoProperties(item) {
    expect(item).toHaveProperty('id.videoId')
    expect(item).toHaveProperty('snippet.title')
    expect(item).toHaveProperty('snippet.channelTitle')
    expect(item).toHaveProperty('snippet.description')
  }

  test('search()', async () => {
    const res = await search()
    expect(res.items.length).toBe(3)
    res.items.forEach(expectVideoProperties)
    expect(typeof res.nextPageToken).toBe('string')
  })

  test('loadMore()', async () => {
    const res = await loadMore('CAMQAA')
    expect(res.items.length).toBe(7)
    res.items.forEach(expectVideoProperties)
    expect(typeof res.nextPageToken).toBe('string')
  })
})
