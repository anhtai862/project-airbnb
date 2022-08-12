import { useState } from "react";
// import { DatePicker, Space } from "antd";

// const { RangePicker } = DatePicker;
import "./rangeDate.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const ChooseDate = () => {
  const [chooseDate, setchooseDate] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  console.log("chooseDate", chooseDate);

  return (
    <>
      <div
        className="mr-4 py-3 px-8 hover:bg-gray-200 transition-all duration-300 rounded-[32px] "
        onClick={() => setchooseDate(!chooseDate)}
      >
        <div className="pb-1">Trả Phòng</div>
        <div className="text-gray-400 text-sm">Thêm Ngày</div>

        <div className="  bg-gray-500 absolute text-red-500">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5b61"]}
            onChange={handleSelect}
          />
        </div>
      </div>

      <div className="mr-4 py-3 px-8 hover:bg-gray-200 transition-all duration-300 rounded-[32px]">
        <div className="pb-1">Nhận Phòng</div>
        <div className="text-gray-400 text-sm ">Thêm Ngày</div>
      </div>
    </>
  );
};

export default ChooseDate;
