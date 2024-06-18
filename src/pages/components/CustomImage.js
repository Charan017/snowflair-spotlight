import { Image } from "antd";
import classNames from "classnames";

const CustomImage = ({ src, width, height, url, preview = false, ...rest }) => {
  return (
    <div>
      {url ? (
        <Image
          src={url}
          preview={preview}
          width={width}
          height={height}
          className={classNames("w-full h-auto", rest.className)}
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
      )}
    </div>
  );
};

export default CustomImage;
