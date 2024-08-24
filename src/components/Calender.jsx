import { memo, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Calender = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(
    "17 April 2020 - 21 May 2020"
  );

  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
        <FaCalendarAlt className="text-blue-500" />
      </div>
      <div className="flex flex-col relative">
        <span className="text-gray-600 font-semibold">Filter Periode</span>
        <select
          className="text-sm text-gray-500 bg-transparent focus:outline-none pr-6"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option value="17 April 2020 - 21 May 2020">
            17 April 2020 - 21 May 2020
          </option>
          <option value="01 June 2020 - 30 June 2020">
            01 June 2020 - 30 June 2020
          </option>
          <option value="01 July 2020 - 31 July 2020">
            01 July 2020 - 31 July 2020
          </option>
          Add more options as needed
        </select>
      </div>
    </div>
  );
};

export default memo(Calender);
