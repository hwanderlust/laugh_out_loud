import React from 'react'

export default function Footer(props) {
  return (
    <footer className="page-footer indigo grey darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Laugh Out Loud</h5>
            <a className="grey-text text-lighten-4" href="https://github.com/15Dkatz/official_joke_api" target="_blank">
              <p >Official Joke API</p>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <a className="grey-text text-lighten-4 center" href="https://github.com/15Dkatz/official_joke_api">© Mar 2018 Last Commit Text</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
