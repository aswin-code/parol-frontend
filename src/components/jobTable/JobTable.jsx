import React from 'react'
import './JobTable.scss'
function JobTable() {
    return (
        <div className='job-table'>
            <div className="header">
                <h3>Recent Jobs</h3>
                <button>Filter</button>
            </div>
            <div className="table-body">
                <div className="job">
                    <ul>
                        <li>Full Stack Developer</li>
                    </ul>
                    <div className="btn-group">
                        <button>view</button>
                        <button>Apply job</button>
                    </div>
                </div>
                <div className="job">
                    <ul>
                        <li>Full Stack Developer</li>
                    </ul>
                    <div className="btn-group">
                        <button>view</button>
                        <button>Apply job</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobTable