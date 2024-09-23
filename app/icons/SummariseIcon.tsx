import type { ComponentProps } from "react";

export function SummariseIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.4 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2v-7.4M2 6h4M2 10h4M2 14h4M2 18h4" />
      <path d="M21.378 5.626a1 1 0 10-3.004-3.004l-5.01 5.012a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506z" />
    </svg>
  );
}
