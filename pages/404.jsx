import Container from '@/components/layouts/container';

const NotFoundPage = () => {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-4xl font-bold">404 - Not Found</h1>
        <p className="pt-4 pb-8 italic">
          The page you are looking for might have been removed, had its name changed or is temporaily unavailable.
        </p>
        <button className="px-5 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-gray-200 transition-all">
          Return to homepage
        </button>
      </div>
    </Container>
  );
};

export default NotFoundPage;
