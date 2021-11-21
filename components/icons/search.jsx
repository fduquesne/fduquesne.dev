const IconSearch = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-search"
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
      <circle cx={10} cy={10} r={7}></circle>
      <line x1={21} y1={21} x2={15} y2={15}></line>
    </svg>
  );
};

export default IconSearch;
