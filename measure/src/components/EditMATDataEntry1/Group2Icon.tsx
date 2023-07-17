import { memo, SVGProps } from 'react';

const Group2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1575 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={1575} height={15} fill='#E72971' />
    <path d='M182 0H621V15H194.164L182 0Z' fill='#F08106' />
    <rect x={584} width={354} height={15} fill='#A9D9F3' />
    <rect x={1335} width={240} height={15} fill='#B1D235' />
    <path d='M871 0H1369L1330.82 15H885.036L871 0Z' fill='#39A9E0' />
  </svg>
);
const Memo = memo(Group2Icon);
export { Memo as Group2Icon };
