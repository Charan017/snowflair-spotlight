import React from "react";
import Badge from "./Badge";

const OpenPositionCard = ({ item }) => {
  return (
    <div className="bg-OpenPositionCardColor rounded-[12px] p-[16px] gap-[12px]">
      <div className="font-medium text-lg mb-[8px] text-primaryText">
        {item?.title}
      </div>
      <div className="font-medium text-md mb-[12px] text-textThree flex flex-wrap">
        {item?.location_text}
      </div>
      <div className="flex gap-[8px]">
        <Badge title={item?.employment_type} />
        <Badge
          title={`${item?.currency_symbol}${item?.base_salary}/${item?.pay_frequency}`}
        />
      </div>
    </div>
  );
};

export default OpenPositionCard;
