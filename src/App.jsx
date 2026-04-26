import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPages from './pages/JobsPages';
import AddJobsPage from './pages/AddJobsPage';
import EditJobsPage from './pages/EditJobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';

const App = () => {
  // ADD JOBS
  const addjob = async newJob => {
    const resp = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  // EDIT JOBS
  const updateJob = async job => {
    const resp = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  //  Delete Job
  const deleteJob = async id => {
    const resp = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });

    return;
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPages />} />
        {/* prettier-ignore */}
        <Route path="/add-job" element={<AddJobsPage addJobSubmit={addjob} />}
        />
        {/* prettier-ignore */}
        <Route path="/edit-job/:id"  element={<EditJobsPage updateJobSubmit={updateJob} />}loader={jobLoader}/>
        {/* prettier-ignore */}
        <Route path="/jobs/:id" element={<JobPage deleteJob = {deleteJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
