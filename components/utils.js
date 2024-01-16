import { useEffect, useRef, useState } from "react";

const getWindowSize = () =>
typeof window !== 'undefined' ? { windowHeight: window.innerHeight, windowWidth: window.innerWidth } : {}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize())

  const handleResize = () => setWindowSize(getWindowSize())

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export function useMobileView() {
    const { windowWidth } = useWindowSize()
    const [isMobile, setMobile] = useState(false);

    useEffect(
        () => {
            if (windowWidth <= 768) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        },
        [windowWidth]
    )
    return isMobile
}