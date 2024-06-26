import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-center bg-black">
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </div>
  );
};

export default Loader;
