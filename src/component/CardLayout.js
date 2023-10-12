import React from 'react'

export const CardLayout = ({ hero, func }) => {
    console.log("Hero Data: ", hero);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={hero?.image?.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{hero?.name}</h5>
                <p className="card-text">Real Name: {hero?.biography['full-name']}</p>
            </div>
            <div className="row flex">
                <div className="col">
                    <div className="d-grid m-2">
                        <button className="btn btn-primary" onClick={() => func('collect')}>Collect</button>
                    </div>
                    <div className="col">
                        <div className="d-grid m-2">
                            <button className="btn btn-danger" onClick={() => func('delete')}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
