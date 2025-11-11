import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.2 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation on enter and exit
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  return { isVisible, ref: sectionRef };
}
