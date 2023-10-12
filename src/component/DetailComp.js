import React from 'react'

export const DetailComp = ({ characterList }) => {
  return (
    <div className="card mb-3" style={{ width: "200vh"}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={characterList?.character?.image?.url} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title mt-5"><strong>Full Name: </strong>{characterList?.character?.biography['full-name']}</h5>
          <h5 className="card-title mt-3"><strong>Eye-Color: </strong>{characterList?.character?.appearance['eye-color']}</h5>
          <h5 className="card-title mt-3"><strong>Gender: </strong>{characterList?.character?.appearance['gender']}</h5>
          <h5 className="card-title mt-3"><strong>Height: </strong>{characterList?.character?.appearance?.height[0]}</h5>
          <h5 className="card-title mt-3"><strong>First-Appearance: </strong>{characterList?.character?.biography['first-appearance']}</h5>
          <p className="card-text mt-5"><small className="text-body-secondary">{characterList?.character?.biography?.publisher}</small></p>
        </div>
      </div>
    </div>
  </div>
  )
}
