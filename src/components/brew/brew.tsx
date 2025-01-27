'use client';

import { useState } from 'react';

import BrewOptions from '../brew-options/brew-options';
import RecipeInfo from '../recipe-info/recipe-info';

import calculateBrew, {
  BrewSize,
  Balance,
  Strength,
} from '@/utils/calculate-brew';

const Brew = () => {
  const [brewSize, setBrewSize] = useState<BrewSize>(BrewSize.MEDIUM);
  const [balance, setBalance] = useState<Balance>(Balance.EVEN);
  const [strength, setStrength] = useState<Strength>(Strength.MEDIUM);

  const { coffeeAmount, waterAmount, pours } = calculateBrew(
    brewSize,
    balance,
    strength
  );

  return (
    <div className="p-4">
      <BrewOptions
        brewSize={brewSize}
        setBrewSize={setBrewSize}
        balance={balance}
        setBalance={setBalance}
        strength={strength}
        setStrength={setStrength}
      />
      <RecipeInfo
        coffeeAmount={coffeeAmount}
        waterAmount={waterAmount}
        pours={pours}
      />
    </div>
  );
};

export default Brew;
