import { cn } from "@/lib/utils";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const inputVariants = cva("file:text-foreground placeholder:text-muted-foreground", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      search: "bg-neutral-100/20 text-neutral-100 rounded-lg w-[200px] h-[28px] focus:outline-none focus:border-0",
    },
    size: {
      default: "font-light text-xs leading-4 tracking-[0.4%] px-4 py-2 has-[>svg]:px-5",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "search",
    size: "default",
  },
});

function Input({
  className,
  variant,
  size,
  icon,
  type,
  ...props
}: React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    icon?: IconProp;
  }) {
  return (
    <div className="relative w-fit">
      <input
        type={type}
        data-slot="input"
        className={cn(inputVariants({ variant, size }), className as string, icon ? "pl-[26px]" : "")}
        {...props}
      />
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="absolute left-1.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-100/80"
        />
      )}
    </div>
  );
}

export { Input };
