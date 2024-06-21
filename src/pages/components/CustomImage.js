import { Image } from "antd";
import classNames from "classnames";

const CustomImage = ({ src, width, height, url, preview = false, ...rest }) => {
  return url ? (
    <Image
      src={url}
      preview={preview}
      width={width}
      height={height}
      className={classNames("w-full h-auto", rest.className)}
      style={{
        overflow: "hidden",
        aspectRatio: "auto",
        objectFit: "contain",
      }}
      {...rest}
    />
  ) : (
    <Image
      src={`/assets/${src}`}
      preview={preview}
      width={width}
      height={height}
      alt=""
      style={{
        overflow: "hidden",
        aspectRatio: "auto",
        contain: "",
        objectFit: "contain",
      }}
      {...rest}
    />
  );
};

export default CustomImage;
