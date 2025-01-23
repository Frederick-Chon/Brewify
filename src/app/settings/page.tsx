import Navigation from '@/components/navigation/navigation';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-4">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-2 text-lg">
          Customize your preferences and app settings here.
        </p>
      </div>
      <Navigation />
    </div>
  );
};

export default Settings;
