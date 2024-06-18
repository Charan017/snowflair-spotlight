import { useEffect, useState } from "react";
import SpotLight from "./spotlight";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div></div>;
  }

  return mounted && <SpotLight />;
}
