import Navigation from '@/components/navigation/navigation';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-4">
        <h1 className="text-3xl font-bold">Good afternoon...</h1>
        <p className="mt-2 text-lg">What would you like to brew?</p>
      </div>
      <Navigation />
    </div>
  );
};

export default Home;
