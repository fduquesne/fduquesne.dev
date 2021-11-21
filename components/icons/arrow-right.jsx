const IconArrowRight = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-arrow-right"
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
      <line x1={5} y1={12} x2={19} y2={12}></line>
      <line x1={13} y1={18} x2={19} y2={12}></line>
      <line x1={13} y1={6} x2={19} y2={12}></line>
    </svg>
  );
};

export default IconArrowRight;
