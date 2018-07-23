function fetchTenJokes(callback) {
  const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
    return fetch(url)
      .then(res => res.json())
}

function fetchRandomJoke(callback) {
  const url = "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke"
  return fetch(url)
    .then(res => res.json())
}

export {
  fetchTenJokes,
  fetchRandomJoke
}
