import { getYearFromDate } from "@/utils/common";
import CustomImage from "./CustomImage";
import DividerComponent from "./DividerComponent";
import TruncatedText from "./TruncatedText";

const ExperienceComponent = ({ item }) => {
  return (
    <div>
      <div className="flex justify-between mb-[12px]">
        <div className="flex items-center ">
          <CustomImage src={"glamHubIcon.svg"} width={40} height={40} />
          <div className="ml-[12px]">
            <div className="text-primaryText font-medium text-lg leading-19 mb-[4px]">
              {item?.title}
            </div>
            <div className="text-textThree font-medium text-md leading-19">
              {item?.company}
            </div>
          </div>
        </div>
        <div className="flex items-center self-end">
          <div className="text-textThree font-medium text-md leading-16">
            {getYearFromDate(item?.start_date)}
          </div>
          <div className="w-[5px] h-[5px] rounded-full bg-textThree mx-[6px]" />
          <div className="text-textThree font-medium text-md leading-16">
            {item?.is_currently_working
              ? "Present"
              : getYearFromDate(item?.end_date)}
          </div>
        </div>
      </div>
      {item?.description && <TruncatedText text={item?.description} />}
      <DividerComponent />
    </div>
  );
};

export default ExperienceComponent;
