import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import "../../index.css";

export type ButtonVariantProps = VariantProps<typeof ButtonVariants>;
export interface ButtonProps extends ButtonVariantProps {
  children?: JSX.Element | React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonVariants = cva(
  "h-fit w-[100%] transition-colors ease-linear delay-150 transform bg-blue-500 hover:bg-blue-700 rounded-md p-2",
  {
    variants: {
      style: {
        filled:
          "bg-blue-500 border-[2.5px] border-blue-500 hover:border-blue-700 hover:bg-blue-700 text-white",
        outlined:
          "border-[2.5px] bg-white border-blue-500 hover:bg-blue-700 hover:text-white  hover:border-blue-700  text-blue-500",
      },
    },

    defaultVariants: {
      style: "filled",
    },
  }
);

export default function Button({
  children,
  className,
  onClick,
  style,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${twMerge(
        ButtonVariants({
          style,
          className,
        }),
        "justify-center items-center"
      )}`}
    >
      {children}
    </button>
  );
}
