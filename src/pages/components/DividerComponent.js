import classNames from "classnames";

const DividerComponent = ({ className }) => {
  return (
    <div
      className={classNames("h-[1px] bg-borderColor my-[24px]", className)}
    />
  );
};

export default DividerComponent;
