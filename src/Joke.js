import React from 'react'

export default function Joke({jokes}) {
  return (
    <div class="card">
      <div class="card-content">
        <span class="card-title activator">{jokes.setup}<i class="material-icons right">more_vert</i></span>
        <p>{jokes.type}</p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{jokes.punchline}<i class="material-icons right">close</i></span>
      </div>
    </div>
  )
}
