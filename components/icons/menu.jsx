const IconMenu = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-menu"
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
      <line x1={4} y1={8} x2={20} y2={8}></line>
      <line x1={4} y1={16} x2={20} y2={16}></line>
    </svg>
  );
};

export default IconMenu;
