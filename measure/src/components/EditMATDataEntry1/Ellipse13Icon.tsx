import { memo, SVGProps } from 'react';

const Ellipse13Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={7.5} cy={7.5} r={7.5} fill='#B1D235' stroke='white' />
  </svg>
);
const Memo = memo(Ellipse13Icon);
export { Memo as Ellipse13Icon };
