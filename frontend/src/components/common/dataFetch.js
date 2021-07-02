// Configuration object containing endpoints and api keys
const fetchConfig = {
  omdbAPI: {
    baseURL: "https://www.omdbapi.com/?",
    apiKey: "apikey=c4961d1f",
  },
  commentsAPI: {
    baseURL: "https://striveschool-api.herokuapp.com/api/comments/",
    authToken:process.env.REACT_APP_STRIVE_AUTH_TOKEN,
    contentType: "application/json",
  },
}

// Function that crafts the url for Film fetching
const fetchFilms = queryUrl => {
  const omdbConf = fetchConfig.omdbAPI
  const fetchUrl = omdbConf.baseURL + omdbConf.apiKey
  const finalUrl = fetchUrl + queryUrl
  return [finalUrl]
}

// Function that crafts an object containing the endpoint url and the option object
const fetchComments = (filmId, method = "GET", body = null) => {
  const commConf = fetchConfig.commentsAPI
  const finalUrl = commConf.baseURL + filmId
  const options = {
    method: method,
    headers: {
      "Content-type": commConf.contentType,
      Authorization: "Bearer " + commConf.authToken,
    },
    body: body ? JSON.stringify(body) : null,
  }
  return [finalUrl, options]
}
// The main fetch function that accepts the endpoint and options, and returns the result object
const fetchData = async fetchContents => {
  let result = { error: false, data: [] }
  try {
    const response = await fetch(...fetchContents)
    if (response.ok) {
      result.data = await response.json()
    } else {
      result.error = true
    }
  } catch (error) {
    result.error = true
  }
  return result
}
// function to get films
export const getFilms = async (searchQuery, type = "", page = 1) => {
  type = type === "home" ? "" : type
  const queryUrl = `&s=${searchQuery}` + (type ? `&type=${type}` : "") + `&page=${page}`
  return await fetchData(fetchFilms(queryUrl))
}
// function to get comments
export const getComments = async filmId =>  await fetchData(fetchComments(filmId))
// function to delete a comment
export const deleteComment = async commentId => await fetchData(fetchComments(commentId, "DELETE"))
// function to post a comment
export const postComment = async comment => await fetchData(fetchComments("", "POST", comment))
// function to get one single movie/show/getFilms
export const getSingleMovie = async id => {
  const query = "&i=" + id
  return await fetchData(fetchFilms(query))
}
