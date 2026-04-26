import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const JobsListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = job.description;
  if (!showFullDescription && description.length > 100) {
    description = description.slice(0, 90) + '...';
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative" key={job.id}>
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>
        <button
          onClick={() => setShowFullDescription(prev => !prev)}
          className="text-dingo-500 duration-300 hover:text-dingo-600 mb-5 cursor-pointer"
        >
          {showFullDescription ? 'Show Less' : 'Show More'}
        </button>
        <h3 className="text-indigo-500 mb-2">
          {job.salary.replaceAll('$', '£')} / Year
        </h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col  lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3 ">
            <FaMapMarker className="inline mb-1 mr-0.5   text-lg" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsListing;
