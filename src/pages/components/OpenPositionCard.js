import React, { useEffect } from "react";
import Badge from "./Badge";

const OpenPositionCard = ({ item }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      let url;

      if (/android/i.test(userAgent)) {
        url =
          "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en";
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        url = "https://www.apple.com/in/shop/accessories/all";
      } else {
        url = "https://example.com";
      }

      const button = document.getElementById("redirect-button");
      button.onclick = () => {
        window.location.href = url;
      };
    }
  }, []);

  return (
    <div
      className="bg-OpenPositionCardColor rounded-[12px] p-[16px] gap-[12px] cursor-pointer"
      id="redirect-button"
    >
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
