import React from "react";
import Badge from "./Badge";

const OpenPositionCard = ({}) => {
  return (
    <div className="bg-OpenPositionCardColor rounded-[12px] p-[16px] gap-[12px]">
      <div className="font-medium text-lg mb-[8px] text-primaryText">
        Product Designer
      </div>
      <div className="font-medium text-md mb-[12px] text-textThree">
        San Francisco, CA
      </div>
      <div className="flex gap-[8px]">
        <Badge title={"Full-time"} />
        <Badge title={"$15/hour"} />
      </div>
    </div>
  );
};

export default OpenPositionCard;
