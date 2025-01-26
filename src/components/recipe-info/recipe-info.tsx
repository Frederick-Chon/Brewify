type RecipeInfoProps = {
  coffeeAmount: number;
  waterAmount: number;
  pours: { pourNumber: number; amount: number }[];
};

const RecipeInfo = ({ coffeeAmount, waterAmount, pours }: RecipeInfoProps) => {
  return (
    <div className="mt-14 p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recipe Summary</h2>

      <p className="text-lg font-medium text-gray-300">
        Coffee Beans: <span className="text-white">{coffeeAmount}g</span>
      </p>

      <p className="text-lg font-medium text-gray-300 mt-2">
        Total Water: <span className="text-white">{waterAmount}ml</span>
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Pour Breakdown:</h3>
        <ul className="list-disc list-inside text-gray-300">
          {pours.map((pour) => (
            <li key={pour.pourNumber}>
              Pour {pour.pourNumber}:{' '}
              <span className="text-white">{pour.amount}ml</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeInfo;
