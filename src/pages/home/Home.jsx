import React from 'react'
import Carosual from '../../components/carosual/Carosual'
import JobTable from '../../components/jobTable/JobTable'
import NavBar from '../../components/navbar/NavBar'
import './Home.scss'

const Home = () => {
    return (
        <div className='home'>
            <NavBar />
            <main>
                <Carosual />
            </main>
            <section>
                <JobTable />
            </section>

        </div>
    )
}

export default Home