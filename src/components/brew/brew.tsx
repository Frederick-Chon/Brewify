'use client';

import { useState } from 'react';

import BrewOptions from '../brew-options/brew-options';
import RecipeInfo from '../recipe-info/recipe-info';

const Brew = () => {
  const [brewSize, setBrewSize] = useState('medium');
  const [balance, setBalance] = useState('even');
  const [strength, setStrength] = useState('medium');

  // TODO: update hardcoded vals after creating calc func
  const coffeeAmount = 20;
  const waterAmount = 300;
  const pours = [
    { pourNumber: 1, amount: 60 },
    { pourNumber: 2, amount: 60 },
    { pourNumber: 3, amount: 90 },
    { pourNumber: 4, amount: 90 },
  ];

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
