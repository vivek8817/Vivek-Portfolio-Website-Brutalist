import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, className = "", delay = "0ms", animation = "animate-fade-in-up", threshold = 0.1, as: Component = "div" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component
      ref={ref}
      className={`${className} ${isVisible ? animation : 'opacity-0'}`}
      style={{ animationDelay: isVisible ? delay : '0ms' }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
