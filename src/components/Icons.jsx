import React from 'react';

// Ikon garis sederhana (stroke) yang dipakai di seluruh halaman
const Svg = ({ className = 'w-6 h-6', strokeWidth = 1.8, children }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const IconBuilding = (p) => (
  <Svg {...p}><path d="M3 21h18" /><path d="M6 21V10l6-6 6 6v11" /><path d="M10 21v-5h4v5" /></Svg>
);
export const IconPeople = (p) => (
  <Svg {...p}><circle cx="9" cy="7" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.2c2.8.4 5 2.8 5 5.8" /></Svg>
);
export const IconBox = (p) => (
  <Svg {...p}><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></Svg>
);
export const IconCard = (p) => (
  <Svg {...p}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><path d="M7 15h4" /></Svg>
);
export const IconCheck = (p) => (
  <Svg strokeWidth={2.2} {...p}><path d="M5 12l5 5L20 7" /></Svg>
);
export const IconChat = (p) => (
  <Svg strokeWidth={2} {...p}><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /></Svg>
);
export const IconCamera = (p) => (
  <Svg {...p}><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></Svg>
);
export const IconChevronLeft = (p) => (
  <Svg strokeWidth={2} {...p}><path d="M15 18l-6-6 6-6" /></Svg>
);
export const IconInfo = (p) => (
  <Svg strokeWidth={2} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 8v5" /><path d="M12 16h.01" /></Svg>
);
export const IconMenu = (p) => (
  <Svg strokeWidth={2} {...p}><path d="M4 6h16M4 12h16M4 18h16" /></Svg>
);
export const IconClose = (p) => (
  <Svg strokeWidth={2} {...p}><path d="M6 18L18 6M6 6l12 12" /></Svg>
);
export const IconTruck = (p) => (
  <Svg {...p}><path d="M3 6h11v10H3z" /><path d="M14 10h4l3 3v3h-7" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></Svg>
);
