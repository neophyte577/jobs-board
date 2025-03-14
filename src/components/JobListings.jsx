import React, {useState, useEffect} from 'react'
import JobListing from './JobListing.jsx'
import Spinner from './Spinner.jsx'

const JobListings = ({isHome = false}) => {
  
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiURL = isHome ? '/api/jobs?limit=3' : '/api/jobs'
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      } catch {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return (
    <>
      <section className="bg-summerBlush font-semibold px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-extrabold text-deepUnionRed mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
            {loading ? (<Spinner loading={loading}/>) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job)=>(
                <JobListing job={job} key={job.id}/>            
                ))}
            </div>
            )}
          </div>
      </section>    
    </>
  )
}

export default JobListings