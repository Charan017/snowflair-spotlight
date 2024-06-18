const Badge = ({ title }) => {
  return (
    <div className="bg-badge rounded-[30px] px-[12px] py-[4px] font-medium text-md text-primaryText">
      {title}
    </div>
  );
};

export default Badge;
