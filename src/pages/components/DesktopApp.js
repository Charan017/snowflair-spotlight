import { Tooltip } from "antd";
import CustomImage from "./CustomImage";
import VideoPlayer from "./VideoPlayer";
import DividerComponent from "./DividerComponent";
import ExperienceComponent from "./ExperienceComponent";
import classNames from "classnames";
import DefaultProfileIcon from "./DefaultProfileIcon";
import { getUserExperience } from "@/utils/common";

const DesktopApp = ({ data }) => {
  return (
    <div className="flex bg-black w-[100%] h-[100vh]">
      <div className="w-[50%]">
        <div className="relative bg-gradient-to-r from-gradientStart to-gradientEnd h-[200px] w-full">
          <div className="absolute bottom-[-70px] left-[16px] flex justify-end flex-row-reverse mb-[20px]">
            <div className="relative">
              {data?.profileDetails?.profile_picture_url ? (
                <CustomImage
                  url={data?.profileDetails?.profile_picture_url}
                  preview={true}
                  className="rounded-full"
                  width={88}
                  height={88}
                />
              ) : (
                <DefaultProfileIcon />
              )}
              <div className="w-[20px] h-[20px] rounded-[10px] bg-lightPurple flex items-center justify-center absolute bottom-0 right-[10px]">
                {getUserExperience(data?.userExperience)}
              </div>
            </div>
          </div>
        </div>
        <div className="px-[20px]">
          <div className="text-primaryText font-semibold text-xl leading-24  pt-[67px]">
            {`${data?.profileDetails?.first_name} ${data?.profileDetails?.last_name}`}
          </div>

          <div className="flex items-center mt-[4px]">
            <div className="text-secondaryText font-medium text-lg mr-[6px]">
              {data?.profileDetails?.title}
            </div>
            <CustomImage src={"link.svg"} width={20} height={20} />
            <div className="text-secondaryText font-medium text-lg ml-[6px]">
              {data?.profileDetails?.company}
            </div>
          </div>

          <div className="text-secondaryText font-medium text-lg leading-24 my-[16px]">
            {data?.profileDetails?.description}
          </div>

          <DividerComponent />

          <div className="text-primaryText font-semibold text-xl leading-24 mb-[16px]">
            Experience
          </div>
          {Object.keys(data?.userExperience)?.map((item) => (
            <ExperienceComponent item={data?.userExperience?.[item]} />
          ))}
        </div>
      </div>
      <div className="w-[50%] px-[20px]">
        {Object.keys(data?.showCase)?.map((item, index) => {
          const showCaseItem = data?.showCase?.[item];

          return (
            <div key={index} className={classNames()}>
              {showCaseItem?.media_type === "video" && (
                <VideoPlayer url={showCaseItem?.url} />
              )}
            </div>
          );
        })}

        <div className="flex items-center mb-[16px]">
          <div className="text-primaryText font-semibold text-xl mr-[8px]">
            My Showcase
          </div>
          <Tooltip
            overlayClassName="bg-tooltipBackgroundColor rounded-[6px] font-medium text-md text-primaryText"
            title="Showcase your team members and culture for job seekers to know you better!"
          >
            <CustomImage src={"infoIcon.svg"} width={16} height={16} />
          </Tooltip>
        </div>

        <div className="flex flex-wrap justify-start pb-[32px]">
          {Object.keys(data?.showCase)
            ?.filter((it) => data?.showCase?.[it]?.media_type === "photo")
            ?.map((item, index) => {
              const showCaseItem = data?.showCase?.[item];

              return (
                <div
                  key={index}
                  className={classNames(
                    "w-1/2 pb-[8px]",
                    index % 2 === 0 ? "pr-[8px]" : "pl-[8px]"
                  )}
                >
                  {showCaseItem?.media_type === "photo" && (
                    <CustomImage
                      url={showCaseItem?.url}
                      preview={true}
                      className="w-full h-auto rounded-[8px]"
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DesktopApp;
