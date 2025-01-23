import Navigation from '@/components/navigation/navigation';

const Notes = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-4">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <p className="mt-2 text-lg">
          Keep track of your favorite brews and recipes here.
        </p>
      </div>
      <Navigation />
    </div>
  );
};

export default Notes;
