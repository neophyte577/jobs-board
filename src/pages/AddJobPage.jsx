import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

const AddJobPage = ({addJobSubmit}) => {

    useEffect(() => {
        document.title = 'Add Job';
    }, []);

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [type, setType] = useState("Full-Time");
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState("Under $50K");
    const [orgName, setOrgName] = useState('');
    const [orgDescription, setOrgDescription] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();

        const newJob = {
            title,
            type,
            location,
            description,
            salary,
            org: {
                name: orgName,
                description: orgDescription,
                email,
                phone
            }
        };

        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newJob),
            });

            if (!response.ok) {
                throw new Error('Failed to add job');
            }

            toast.success('🎉 Job added successfully!');

            return navigate('/jobs');  // ✅ Ensures behavior matches original function

        } catch (error) {
            toast.error('Error adding job. Please try again.');
            console.error(error);
        }
    };
  
  return (
    <section className="bg-summerBlush">
        <div className="container m-auto max-w-2xl py-24">
        <div
            className="bg-red-50 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
            <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-bold mb-6">Add Job</h2>

            <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Job Type</label
                >
                <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
                >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
                >
                <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="e.g., Barista and coffee roaster, call that a daily grind"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label>
                <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Salary</label>
                <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
                </select>
            </div>

            <div className='mb-4'>
                <label className='block text-gray-700 font-bold mb-2'>
                Location
                </label>
                <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Organization Location'
                required          
                value={location}
                onChange={(e) => setLocation(e.target.value)} 
                />
            </div>

            <h3 className="text-2xl mb-5">Organization Info</h3>

            <div className="mb-4">
                <label htmlFor="org" className="block text-gray-700 font-bold mb-2"
                >Organization Name</label
                >
                <input
                type="text"
                id="org"
                name="org"
                className="border rounded w-full py-2 px-3"
                placeholder="Organization Name"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                htmlFor="org_description"
                className="block text-gray-700 font-bold mb-2"
                >Organization Description</label>
                <textarea
                id="org_description"
                name="org_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your organization do and/or whom do you represent?"
                value={orgDescription}
                onChange={(e) => setOrgDescription(e.target.value)}
                ></textarea>
            </div>

            <div className="mb-4">
                <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label>
                <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
                >
                <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div>
                <button
                className="bg-lightUnionRed hover:bg-unionRed text-[#FCE5B1] font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-3"
                type="submit"
                >
                Add Job
                </button>
            </div>
            </form>
        </div>
        </div>
    </section>
  )
}

export default AddJobPage