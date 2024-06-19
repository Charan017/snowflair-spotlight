import { getUserExperience } from "@/utils/common";
import useWindowWidth from "@/utils/hooks/useWindowWidth";
import { Tooltip } from "antd";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { firebaseAnonymousLogin, getApi } from "../api/apiClient";
import {
  getOpenPositionsThunk,
  getProfileDetailsThunk,
  getShowCaseThunk,
  getUserExperiencesThunk,
} from "../api/SpotlightAPIs";
import CustomImage from "../components/CustomImage";
import DefaultProfileIcon from "../components/DefaultProfileIcon";
import DividerComponent from "../components/DividerComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import Loader from "../components/Loader";
import OpenPositionCard from "../components/OpenPositionCard";
import VideoPlayer from "../components/VideoPlayer";

const SpotLight = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    showCase: {},
    userExperience: {},
    profileDetails: {},
    openPositions: {},
  });
  const width = useWindowWidth();

  const router = useRouter();

  const { id } = router.query;

  console.log({ id });

  const fetchData = async () => {
    setLoading(true);
    // try {
    const data = await getApi({ userId: id });
    // const showCase = await getShowCaseThunk({ id });
    // const userExperience = await getUserExperiencesThunk({ id });
    // const profileDetails = await getProfileDetailsThunk({ id });
    // const openPositions = await getOpenPositionsThunk({ id });

    console.log({ data });

    setData({
      showCase: data?.showcase_images || {},
      userExperience: data?.user_experiences || {},
      profileDetails: data?.users || {},
      openPositions: data?.job_listings || {},
    });

    // setData({ showCase, userExperience, profileDetails, openPositions });
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
    setLoading(false);
  };

  const fetchAnonymousLoginAndData = async () => {
    setLoading(true);
    try {
      const loginResponse = await firebaseAnonymousLogin();

      if (loginResponse?.user?.accessToken) {
        await fetchData();
      }
    } catch (error) {
      console.log({ error });
    }
    setLoading(false);
  };

  useEffect(() => {
    // fetchAnonymousLoginAndData();
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <div>
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

          <div className="px-[20px] bg-black pt-[67px]">
            <div className="text-primaryText font-semibold text-xl leading-24 mb-[4px]">
              {`${data?.profileDetails?.first_name} ${data?.profileDetails?.last_name}`}
            </div>

            <div className="flex items-center">
              <div className="text-secondaryText font-medium text-lg mr-[6px]">
                {data?.profileDetails?.title}
              </div>
              <CustomImage
                src={"link.svg"}
                width={20}
                height={20}
                className="mt-[2.3px]"
              />
              <div className="text-secondaryText font-medium text-lg ml-[6px]">
                {data?.profileDetails?.company}
              </div>
            </div>

            <div className="text-secondaryText font-medium text-lg leading-24 my-[16px]">
              {data?.profileDetails?.description}
            </div>

            <div className="w-[100%] sm:w-[400px]">
              {Object.keys(data?.showCase)
                ?.filter((it) => data?.showCase?.[it]?.media_type === "video")
                ?.map((item, index) => {
                  const showCaseItem = data?.showCase?.[item];

                  return (
                    <div key={index}>
                      <VideoPlayer
                        url={showCaseItem?.url}
                        height={width > 700 ? "250px" : "180px"}
                      />
                    </div>
                  );
                })}
            </div>

            <DividerComponent />

            <div className="text-primaryText font-semibold text-xl leading-24 mb-[16px]">
              Experience
            </div>

            <div className="">
              {Object.keys(data?.userExperience)?.map((item, index) => (
                <div key={index}>
                  <ExperienceComponent item={data?.userExperience?.[item]} />
                </div>
              ))}
            </div>

            <div>
              <div className="text-primaryText font-semibold text-xl leading-24 mb-[16px]">
                Open Positions
              </div>
              <div className="sm:grid md:grid lg:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex flex-col gap-4">
                {Object.keys(data?.openPositions)?.map((position) => (
                  <OpenPositionCard item={data?.openPositions?.[position]} />
                ))}
              </div>
            </div>

            <DividerComponent />

            <div className="flex items-center mb-[16px]">
              <div className="text-primaryText font-semibold text-xl mr-[8px]">
                My Showcase
              </div>
              <Tooltip
                overlayClassName="bg-tooltipBackgroundColor rounded-[6px] font-medium text-md text-primaryText"
                title="Showcase your team members and culture for job seekers to know you better!"
              >
                <CustomImage
                  src={"infoIcon.svg"}
                  width={16}
                  height={16}
                  className="mt-[2.3px]"
                />
              </Tooltip>
            </div>

            <div className="flex flex-wrap justify-start pb-[32px] sm:gap-4">
              {Object.keys(data?.showCase)
                ?.filter((it) => data?.showCase?.[it]?.media_type === "photo")
                ?.map((item, index) => {
                  const showCaseItem = data?.showCase?.[item];

                  return (
                    <div
                      key={index}
                      className={classNames(
                        "w-1/2 pb-[8px] sm:w-[150px] sm:h-[150px]",
                        index % 2 === 0
                          ? "pr-[8px] sm:pr-0"
                          : "pl-[8px] sm:pl-0"
                      )}
                    >
                      <CustomImage
                        url={showCaseItem?.url}
                        preview={true}
                        className="w-full h-auto rounded-[8px]"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpotLight;
