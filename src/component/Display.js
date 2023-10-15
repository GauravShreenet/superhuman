import React, { useEffect, useState } from 'react'
import { DetailComp } from './DetailComp'

export const Display = ({ characterList }) => {

    const [selectCaterogry, setSelectCaterogry] = useState('detail');

    console.log(characterList)

    return (
        <div className="p-5 rounded shadow my-5">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={() => setSelectCaterogry('detail')}>Detail</button>
                        <button type="button" className="btn btn-success" onClick={() => setSelectCaterogry('connections')}>Connections</button>
                        <button type="button" className="btn btn-warning" onClick={() => setSelectCaterogry('powerStats')}>Power Stats</button>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col d-flex flex-wrap gap-3 mt-5">
                {Object.keys(characterList).length > 0 && (
                    <DetailComp  characterList={characterList} category={selectCaterogry}/>
                )}
            </div>
            </div>
        </div>
    )
}
