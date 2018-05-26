import youtubeSearch from 'youtube-api-search'
import { API_KEY as key } from './constants'

export async function search(term = '') {
  return await new Promise(resolve => {
    youtubeSearch({ key, term }, videos => resolve(videos))
  })
}
