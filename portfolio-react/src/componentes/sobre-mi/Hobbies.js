import React from 'react'

const Hobbies = () => {
  return (
    <div>
           <section id="hobbit">
        <div className="container">
            <div className="row mt-5 pt-5 mx-0">
                <div className="d-flex justify-content-center">
                    <div className="row ml-sm-2 bg-white shadow ms-sm-1 card-hobbit">
                        <div className="col-4 text-center star d-flex justify-content-center align-items-center">
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <div className="row col-8 p-4">
                            <h2>HOBBIES</h2>
                            <ul>
                                <li>Futbol</li>
                                <li>Runner</li>
                                <li>Bartender</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </div>
  )
}

export default Hobbies