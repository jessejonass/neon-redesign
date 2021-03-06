import { ButtonHTMLAttributes } from "react";

export type ButtonVariants = "primary" | "secondary" | "light" | "translucent";

export type StylesProps = {
  variant?: ButtonVariants;
};

export type ButtonProps = StylesProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string | JSX.Element;
  };
