"use client";

import React from "react";

export const DoodleArrow = ({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    className={className}
    style={style}
    width="80"
    height="60"
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 45C15 50 35 55 55 35C65 25 60 15 50 15C40 15 38 25 45 30C55 38 70 30 75 20"
      stroke="#1a1a1a"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      strokeDasharray="200"
      strokeDashoffset="0"
    />
    <path
      d="M68 18L75 20L72 27"
      stroke="#1a1a1a"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const DoodleStar = ({
  className = "",
  size = 24,
  fill = "#FFE066",
}: {
  className?: string;
  size?: number;
  fill?: string;
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C12.5 8 16 11.5 22 12C16 12.5 12.5 16 12 22C11.5 16 8 12.5 2 12C8 11.5 11.5 8 12 2Z"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleSparkle = ({
  className = "",
  size = 16,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1V15M1 8H15M3 3L13 13M13 3L3 13"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const DoodleCircle = ({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="20"
      cy="20"
      r="16"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />
  </svg>
);

export const DoodlePencil = ({
  className = "",
  size = 28,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 24L7 14L21 4L24 7L10 21L4 24Z"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FFE066"
    />
    <path d="M7 14L10 21" stroke="#1a1a1a" strokeWidth="1.5" />
    <path d="M3 25L4 24" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const DoodleCurlyArrow = ({
  className = "",
}: {
  className?: string;
}) => (
  <svg
    className={className}
    width="60"
    height="80"
    viewBox="0 0 60 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 5C20 15 10 25 15 40C20 55 35 50 35 40C35 30 25 28 20 35C15 42 20 55 30 65C35 70 40 72 45 70"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M42 63L45 70L38 71"
      stroke="#1a1a1a"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const DoodleUnderline = ({
  className = "",
  width = 120,
}: {
  className?: string;
  width?: number;
}) => (
  <svg
    className={className}
    width={width}
    height="12"
    viewBox={`0 0 ${width} 12`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M2 8C${width * 0.15} 4 ${width * 0.35} 10 ${width * 0.5} 6C${width * 0.65} 2 ${width * 0.85} 8 ${width - 2} 5`}
      stroke="#FF6B9D"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const DoodleHeart = ({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="#F8BBD0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 18C10 18 2 12 2 7C2 4 4 2 7 2C8.5 2 9.5 3 10 4C10.5 3 11.5 2 13 2C16 2 18 4 18 7C18 12 10 18 10 18Z"
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleZigzag = ({
  className = "",
  width = 100,
}: {
  className?: string;
  width?: number;
}) => (
  <svg
    className={className}
    width={width}
    height="8"
    viewBox={`0 0 ${width} 8`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M0 4L${width * 0.1} 1L${width * 0.2} 7L${width * 0.3} 1L${width * 0.4} 7L${width * 0.5} 1L${width * 0.6} 7L${width * 0.7} 1L${width * 0.8} 7L${width * 0.9} 1L${width} 4`}
      stroke="#1a1a1a"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
