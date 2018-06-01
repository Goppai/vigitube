import { API_KEY as key, ROOT_URL, commonParams } from './constants'

function youFetch(url) {
  return fetch(url).then(res => res.json())
}

export async function search(q = '') {
  const params = {
    key, q, ...commonParams, maxResults: '3'
  }
  const url = Object.keys(params).reduce((acc, nextKey) => acc.concat(nextKey, '=', params[nextKey], '&'), `${ROOT_URL}?`)

  try {
    return await youFetch(url).then(res => ({ query: q, ...res }))
  } catch (err) {
    console.log('Error fetching results', err)
  }
}

export async function loadMore(pageToken = '', q = '') {
  const params = {
    key, q, ...commonParams, maxResults: '7',
    ...(pageToken && typeof pageToken === 'string' ? { pageToken } : {})
  }
  const url = Object.keys(params).reduce((acc, nextKey) => acc.concat(nextKey, '=', params[nextKey], '&'), `${ROOT_URL}?`)

  try {
    return await youFetch(url)
  } catch (err) {
    console.log('Error loading more results', err)
  }
}
