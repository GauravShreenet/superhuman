import React from 'react'
import { DetailComp } from './DetailComp'

export const Display = ({ characterList }) => {

    console.log(characterList)

    return (
        <div className="p-5 rounded shadow my-5">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Detail</button>
                        <button type="button" className="btn btn-success">Connections</button>
                        <button type="button" className="btn btn-warning">Power Stats</button>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col d-flex flex-wrap gap-3 mt-5">
                <DetailComp  characterList={characterList}/>
            </div>
            </div>
        </div>
    )
}
