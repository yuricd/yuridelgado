import React, { type HTMLAttributeAnchorTarget } from "react";

type TypographyVariant =
  | "header1"
  | "header2"
  | "header3"
  | "body1"
  | "body2"
  | "buttonLabel"
  | "link";

interface BaseTypographyProps {
  variant: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

// Generic props, correctly inferring HTML element props
type TypographyProps<A extends React.ElementType> = BaseTypographyProps &
  Omit<React.ComponentPropsWithoutRef<A>, keyof BaseTypographyProps>;

export function Typography<A extends React.ElementType = "p">({
  variant,
  as,
  children,
  className = "",
  ...props
}: TypographyProps<A>) {
  const isAnchor = variant === "link" || as === "a" || "href" in (props ?? {});
  const Component: React.ElementType =
    as || (isAnchor ? "a" : variant.startsWith("header") ? "h2" : "p");

  const variantClasses: Record<TypographyVariant, string> = {
    header1: "lg:text-4xl lg:leading-12 text-3xl leading-10",
    header2: "text-4xl",
    header3: "text-2xl",
    body1: "",
    body2: "text-sm",
    buttonLabel: "text-sm font-medium uppercase tracking-wide",
    link: "text-brand-primary cursor-pointer hover:underline",
  };

  return (
    <Component
      className={`${variantClasses[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
    </Component>
  );
}
