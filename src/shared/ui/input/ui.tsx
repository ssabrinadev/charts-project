import { cn } from '@libs';
import * as React from 'react';
import { TInputProps } from './types';

const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-xl border border-orange-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
