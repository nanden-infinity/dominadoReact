import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPages from './pages/JobsPages';
import AddJobs from './pages/AddJobs';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPages />} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="/add-job" element={<AddJobs />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
