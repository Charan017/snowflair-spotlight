import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

function useWindowWidth(delay = 700) {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window?.innerWidth);
    const debouncedHandleResize = debounce(handleResize, delay);
    window?.addEventListener("resize", debouncedHandleResize);
    return () => {
      window?.removeEventListener("resize", debouncedHandleResize);
    };
  }, [delay, window]);

  return width;
}

export default useWindowWidth;
