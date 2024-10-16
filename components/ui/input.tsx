import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-16 w-full rounded-md border border-input bg-transparent px-5 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

interface InputWithPasteProps extends InputProps {
  onPaste?: () => void;
}

const InputWithPaste = React.forwardRef<HTMLInputElement, InputWithPasteProps>(
  ({ className, onPaste, ...props }, ref) => {
    return (
      <div className="relative flex items-center justify-between">
        <Input className={cn("pr-20", className)} ref={ref} {...props} />
        <Button
          type="button"
          variant="default"
          className={"absolute right-2 flex items-center justify-center gap-2 rounded-md bg-neutral-700 px-4 py-2 text-white transition-colors hover:bg-gray-600"}
          onClick={onPaste}
        >
          <span className="text-sm font-medium">Paste</span>
          <ClipboardList size={18} />
        </Button>
      </div>
    );
  }
);
InputWithPaste.displayName = "InputWithPaste";

export { Input, InputWithPaste };
