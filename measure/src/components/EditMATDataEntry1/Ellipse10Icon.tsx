import { memo, SVGProps } from 'react';

const Ellipse10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={7.5} cy={7.5} r={7.5} fill='#7AC142' stroke='white' />
  </svg>
);
const Memo = memo(Ellipse10Icon);
export { Memo as Ellipse10Icon };
