import { ClipLoader } from 'react-spinners';
const override = {
  display: 'block',
  position: 'absolute',
  inset: 0,
  margin: '100px auto',
  borderColor: '#4F46E5',
};
const Spinner = ({ loading }) => {
  if (!loading) return null;

  return (
    <section className="bg-blue-50/30 px-4 py-10 h-full relative top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <ClipLoader color="#444" size={80} cssOverride={override} />
    </section>
  );
};

export default Spinner;
