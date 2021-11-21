const IconCode = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-code"
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <polyline points="7 8 3 12 7 16"></polyline>
      <polyline points="17 8 21 12 17 16"></polyline>
      <line x1={14} y1={4} x2={10} y2={20}></line>
    </svg>
  );
};

export default IconCode;
