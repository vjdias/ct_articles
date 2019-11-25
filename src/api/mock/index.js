import listArticles from './data/listArticles'
const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchList () {
    return fetch(listArticles, 10) // wait 1s before returning list-articles
  }
}
