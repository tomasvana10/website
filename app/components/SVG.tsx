export interface SVGIconProps {
  className?: string;
  stroke?: string;
}

export const DropdownIcon = (props: SVGIconProps) => {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" fill="none" width="24" height="24" />
      <g>
        <path d="M4 19h16v-2H4v2zm16-6H4v2h16v-2zM4 9v2h16V9H4zm16-4H4v2h16V5z" />
      </g>
    </svg>
  );
};
