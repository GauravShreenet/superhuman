import React from 'react'

export const DetailComp = ({ characterList, category }) => {

  const renderValue = (value) => {
    if(value === "null" || value === "-" || value === "") {
      return "Not Provided"
    }
    return value;
  }

  return (
    <div className="card mb-3" style={{ width: "200vh" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={characterList?.character?.image?.url} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            {category === 'detail' && (
              <>
                <h5 className="card-title mt-5"><strong>Full Name: </strong>{renderValue(characterList?.character?.biography['full-name'])}</h5>
                <h5 className="card-title mt-3"><strong>Eye-Color: </strong>{renderValue(characterList?.character?.appearance['eye-color'])}</h5>
                <h5 className="card-title mt-3"><strong>Gender: </strong>{renderValue(characterList?.character?.appearance['gender'])}</h5>
                <h5 className="card-title mt-3"><strong>Height: </strong>{renderValue(characterList?.character?.appearance?.height[0])}</h5>
                <h5 className="card-title mt-3"><strong>First-Appearance: </strong>{renderValue(characterList?.character?.biography['first-appearance'])}</h5>
                <p className="card-text mt-5"><small className="text-body-secondary">{renderValue(characterList?.character?.biography?.publisher)}</small></p>
              </>
            )}
            {category === 'connections' && (
              <>
                <h5 className="card-title mt-5"><strong>Group-affiliation: </strong>{renderValue(characterList?.character?.connections['group-affiliation'])}</h5>
                <h5 className="card-title mt-3"><strong>Relatives: </strong>{renderValue(characterList?.character?.connections['relatives'])}</h5>
                <p className="card-text mt-5"><small className="text-body-secondary">{renderValue(characterList?.character?.biography?.publisher)}</small></p>
              </>
            )}
            {category === 'powerStats' && (
              <>
                <h5 className="card-title mt-5"><strong>Combat: </strong>{renderValue(characterList?.character?.powerstats['combat'])}</h5>
                <h5 className="card-title mt-3"><strong>Durability: </strong>{renderValue(characterList?.character?.powerstats['durability'])}</h5>
                <h5 className="card-title mt-3"><strong>Intelligence: </strong>{renderValue(characterList?.character?.powerstats['intelligence'])}</h5>
                <h5 className="card-title mt-3"><strong>Power: </strong>{renderValue(characterList?.character?.powerstats['power'])}</h5>
                <h5 className="card-title mt-3"><strong>Speed: </strong>{renderValue(characterList?.character?.powerstats['speed'])}</h5>
                <h5 className="card-title mt-3"><strong>Strength: </strong>{renderValue(characterList?.character?.powerstats['strength'])}</h5>
                <p className="card-text mt-5"><small className="text-body-secondary">{renderValue(characterList?.character?.biography?.publisher)}</small></p>
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}
