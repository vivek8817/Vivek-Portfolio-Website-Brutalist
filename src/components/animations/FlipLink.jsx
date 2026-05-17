const FlipLink = ({ href, children, className = "", hoverColor = "text-black", ...props }) => {
  return (
    <a href={href} className={`group relative inline-flex overflow-hidden ${className}`} {...props}>
      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span className={`absolute left-0 inline-block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 ${hoverColor}`}>
        {children}
      </span>
    </a>
  );
};

export default FlipLink;
