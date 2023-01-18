import React from 'react'
import './Carosual.scss'
const Carosual = () => {
    return (
        <div className='carosual'>
            <span className='heading'>Find your dream job now</span>
            <div className="btn-group">
                <button className='active'>FIND A JOB</button>
                <button>FIND A CANDIDATE</button>
            </div>
            <div className="query-group">
                <button>TITLE</button>
                <button>LOCATION</button>
                <button>PART-TIME</button>
                <button className='active'>SEARCH</button>
            </div>
        </div>
    )
}

export default Carosual