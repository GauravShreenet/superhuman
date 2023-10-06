
import React from 'react'
import { CardLayout } from './CardLayout'

export const SearchForm = () => {

  return (
    <div className="shadow rounded-2 p-5 mt-5">
        <div className="row">
            <div className="col">
                <h3>Super Hero</h3>
            </div>
            <form>
                <div className="row g-3">
                    <div className="col-md-9">
                        <input type="text" placeholder="Enter the Name..." id='search' className='form-control'/>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grid">
                            <button type='submit' className="btn btn-danger text-light">Search</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="col-md mt-3 d-flex justify-content-center flex-wrap gap-5">
                <CardLayout />
                
            </div>
        </div>
    </div>
  )
}
