import {
  APP_STORE_URL,
  PLAY_STORE_URL,
  timeUnits,
  workSchedules,
} from "@/utils/constants";
import Badge from "./Badge";

const OpenPositionCard = ({ item }) => {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      let url;

      if (/android/i.test(userAgent)) {
        url = PLAY_STORE_URL;
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        url = APP_STORE_URL;
      }

      // Open the URL in a new tab
      if (url) {
        window.open(url, "_blank");
      }
    }
  };

  return (
    <div
      className="bg-OpenPositionCardColor rounded-[12px] p-[16px] gap-[12px] cursor-pointer"
      onClick={handleClick}
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
