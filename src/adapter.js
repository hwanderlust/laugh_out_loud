function fetchTenJokes(callback) {
  const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return data
      })
      .then(jokes => callback(jokes))
}

function fetchRandomJoke(callback) {
  const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke"
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      return data
    })
    .then(jokes => callback(jokes))
}

export {
  fetchTenJokes,
  fetchRandomJoke
}
