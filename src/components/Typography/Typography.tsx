import React from "react";

type TypographyVariant =
  | "header1"
  | "header2"
  | "header3"
  | "handwrite1"
  | "body1"
  | "body2"
  | "buttonLabel"
  | "link";

interface BaseTypographyProps {
  variant: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
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
  const isAnchor = variant === "link" || "href" in props || as === "a";
  const Component: React.ElementType =
    as || (isAnchor ? "a" : variant.startsWith("header") ? "h2" : "p");

  const variantClasses: Record<TypographyVariant, string> = {
    header1: "lg:text-4xl text-3xl leading-12",
    header2: "text-4xl font-semibold tracking-tight",
    header3: "text-xl tracking-tight",
    handwrite1: "text-2xl font-family-handwrite tracking-tight",
    body1: "font-body",
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
