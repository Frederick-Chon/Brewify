'use client';

import { Beaker, Scale, Gauge } from 'lucide-react';

type BrewOptionsProps = {
  brewSize: string;
  setBrewSize: (size: string) => void;
  balance: string;
  setBalance: (balance: string) => void;
  strength: string;
  setStrength: (strength: string) => void;
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
          onChange={(e) => setBrewSize(e.target.value)}
        >
          <option value="small">Small (8 fl oz)</option>
          <option value="medium">Medium (10 fl oz)</option>
          <option value="large">Large (13 fl oz)</option>
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
          onChange={(e) => setBalance(e.target.value)}
        >
          <option value="sweet">Sweet</option>
          <option value="even">Even</option>
          <option value="bright">Bright</option>
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
          onChange={(e) => setStrength(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="strong">Strong</option>
        </select>
      </div>
    </div>
  );
};

export default BrewOptions;
