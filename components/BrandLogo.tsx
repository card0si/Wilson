import Image from "next/image";
import { HTMLAttributes } from "react";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  alt?: string;
} & Omit<HTMLAttributes<HTMLSpanElement>, "children">;

const sizeMap = {
  sm: 72,
  md: 104,
  lg: 144
} as const;

export function BrandLogo({
  size = "md",
  priority,
  alt = "Wilson Moving & Property Services logo",
  className,
  ...rest
}: BrandLogoProps) {
  const dimension = sizeMap[size];

  return (
    <span className={className} {...rest}>
      <Image
        src="/logo.svg"
        alt={alt}
        width={dimension}
        height={dimension}
        priority={priority}
      />
    </span>
  );
}
