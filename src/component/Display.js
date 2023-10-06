import React from 'react'
import { CardLayout } from './CardLayout'

export const Display = () => {
    return (
        <div className="p-5 rounded shadow my-5">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">All</button>
                        <button type="button" className="btn btn-success">Hero</button>
                        <button type="button" className="btn btn-warning">Villain</button>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col d-flex flex-wrap gap-3 mt-5">
                <CardLayout />
                <CardLayout />
                <CardLayout />
                <CardLayout />
                <CardLayout />
                <CardLayout />
                <CardLayout />
                <CardLayout />
                </div>
            </div>
        </div>
    )
}
