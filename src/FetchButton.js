import React from 'react'

export default function FetchButton({name, color, fetchFunction}) {
  return (
    <a className={`waves-effect waves-light btn-large z-depth-5 button ${color}`} onClick={fetchFunction}>
      <i className="material-icons right">tag_faces</i>
      {name}
    </a>
  )
}
