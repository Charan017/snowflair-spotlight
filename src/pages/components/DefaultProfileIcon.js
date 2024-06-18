import CustomImage from "./CustomImage";

const DefaultProfileIcon = () => {
  return (
    <div className="w-[88px] h-[88px] rounded-full border-[2px] border-solid border-profileIconBorderColor flex items-center justify-center bg-profileIconBackgroundColor">
      <CustomImage
        src={"/defaultProfileIcon.svg"}
        preview={true}
        width={32}
        height={34}
      />
    </div>
  );
};

export default DefaultProfileIcon;
