import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer className="container col-sm-12 col-12 ">
        <div className="row">
            <div className="col-12 col-sm-3 text-center text-sm-start">
                <a href="https://github.com/roldante05"><i className="fa-brands fa-github "></i></a>
                <a href="https://www.linkedin.com/in/dante-rold%C3%A1n-a87998201/"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>

            <div className="col-12 col-sm-3 sponsor text-center text-sm-start">Sponsor <a href="https://depcsuite.com/">DePC suite</a></div>
            <div className="col-12 col-sm-3 text-center text-sm-start"> <a href="mailto:">danteroldan72@gmail.com</a></div>
        </div>
        <div className="whatsapp">
            <a href=""><i className="fa-brands fa-whatsapp"></i></a>
        </div>
    </footer>
    </div>
  )
}

export default Footer