import { SVGProps } from 'react';

export function ApidogLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="none"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59L7.41 13H10v-2H7v-2h3V7h2v2h3v2h-3v3.59L13 16.59V14h-2v2.59z" opacity="0.15" />
      <path d="M18.36,5.64a9,9,0,0,0-12.72,0,1,1,0,0,0,1.41,1.41,7,7,0,0,1,9.9,0,1,1,0,1,0,1.41-1.41Z" />
      <path d="M5.64,18.36a9,9,0,0,0,12.72,0,1,1,0,0,0-1.41-1.41,7,7,0,0,1-9.9,0,1,1,0,1,0-1.41,1.41Z" />
      <path d="M12,14a2,2,0,1,0-2-2A2,2,0,0,0,12,14Zm0-2.5A.5.5,0,1,1,11.5,12,.5.5,0,0,1,12,11.5Z" />
    </svg>
  );
}