const IconEye = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-eye"
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
      <circle cx={12} cy={12} r={2}></circle>
      <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
    </svg>
  );
};

export default IconEye;
