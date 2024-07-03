import { playStoreAndAppStoreNavigation } from "@/utils/common";
import { timeUnits, workSchedules } from "@/utils/constants";
import Badge from "./Badge";

const OpenPositionCard = ({ item }) => {
  return (
    <div
      className="bg-OpenPositionCardColor rounded-[12px] p-[16px] gap-[12px] cursor-pointer"
      onClick={playStoreAndAppStoreNavigation}
    >
      <div className="font-medium text-lg mb-[8px] text-primaryText">
        {item?.title}
      </div>
      <div className="font-medium text-md mb-[12px] text-textThree flex flex-wrap">
        {item?.location_text}
      </div>
      <div className="flex gap-[8px]">
        <Badge title={workSchedules?.[item?.employment_type]} />
        <Badge
          title={`${item?.currency_symbol}${item?.base_salary}/${
            timeUnits?.[item?.pay_frequency]
          }`}
        />
      </div>
    </div>
  );
};

export default OpenPositionCard;
