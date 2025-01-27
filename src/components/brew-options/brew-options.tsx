'use client';

import { Beaker, Scale, Gauge } from 'lucide-react';
import { BrewSize, Balance, Strength } from '@/utils/calculate-brew';

type BrewOptionsProps = {
  brewSize: BrewSize;
  setBrewSize: (size: BrewSize) => void;
  balance: Balance;
  setBalance: (balance: Balance) => void;
  strength: Strength;
  setStrength: (strength: Strength) => void;
};

const BrewOptions = ({
  brewSize,
  setBrewSize,
  balance,
  setBalance,
  strength,
  setStrength,
}: BrewOptionsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
        <div className="flex items-center gap-2">
          <Beaker className="w-6 h-6 text-yellow-500" />
          <span className="uppercase text-sm font-semibold text-gray-400">
            Size
          </span>
        </div>
        <select
          className="border-none text-white text-lg bg-gray-800"
          value={brewSize}
          onChange={(e) => setBrewSize(e.target.value as BrewSize)}
        >
          <option value={BrewSize.SMALL}>Small (8 fl oz)</option>
          <option value={BrewSize.MEDIUM}>Medium (10 fl oz)</option>
          <option value={BrewSize.LARGE}>Large (13 fl oz)</option>
        </select>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
        <div className="flex items-center gap-2">
          <Scale className="w-6 h-6 text-green-500" />
          <span className="uppercase text-sm font-semibold text-gray-400">
            Balance
          </span>
        </div>
        <select
          className="border-none text-white text-lg bg-gray-800"
          value={balance}
          onChange={(e) => setBalance(e.target.value as Balance)}
        >
          <option value={Balance.SWEET}>Sweet</option>
          <option value={Balance.EVEN}>Even</option>
          <option value={Balance.BRIGHT}>Bright</option>
        </select>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
        <div className="flex items-center gap-2">
          <Gauge className="w-6 h-6 text-blue-500" />
          <span className="uppercase text-sm font-semibold text-gray-400">
            Strength
          </span>
        </div>
        <select
          className="border-none text-white text-lg bg-gray-800"
          value={strength}
          onChange={(e) => setStrength(e.target.value as Strength)}
        >
          <option value={Strength.LIGHT}>Light</option>
          <option value={Strength.MEDIUM}>Medium</option>
          <option value={Strength.STRONG}>Strong</option>
        </select>
      </div>
    </div>
  );
};

export default BrewOptions;
