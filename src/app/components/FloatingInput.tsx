
import React, { InputHTMLAttributes, forwardRef } from 'react';

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  variant?: 'primary' | 'secondary';
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, error, variant = 'primary', className = '', ...props }, ref) => {
  
    const baseClasses = `block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm  border appearance-none focus:outline-none focus:ring-0 peer ${className}`;
    
    const variantClasses = {
      primary: 'text-base-100 border-base-60 focus:border-primary-100',
      secondary: 'text-base-100 border-base-60 focus:border-base-80',
    };
    
    const labelVariantClasses = {
      primary: 'peer-focus:text-primary-100',
      secondary: 'peer-focus:text-base-80',
    };
    
    const errorClasses = 'border-error-100 focus:border-error-80';
    
    return (
      <div className="relative">
        <input
          ref={ref}
          className={`${baseClasses} ${variantClasses[variant]} ${error ? errorClasses : ''}`}
          placeholder=" "
          {...props}
        />
        <label
          className={`absolute text-sm text-base-60 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 ${
            labelVariantClasses[variant]
          } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
        >
          {label}
        </label>
        {error && (
          <p className="mt-1 text-xs text-error-100">{error}</p>
        )}
      </div>
    );
  }
);

FloatingInput.displayName = 'FloatingInput';

export default FloatingInput;