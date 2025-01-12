import React from 'react';

const getVariantClasses = (variant = 'default') => {
  const variants = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border border-gray-300 bg-white hover:bg-gray-100',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    ghost: 'hover:bg-gray-100',
    link: 'text-blue-500 hover:underline'
  };
  return variants[variant] || variants.default;
};

const getSizeClasses = (size = 'default') => {
  const sizes = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 px-3 py-1 text-sm',
    lg: 'h-10 px-8 py-2',
    icon: 'h-9 w-9'
  };
  return sizes[size] || sizes.default;
};

const Button = React.forwardRef(({
  className = '',
  variant = 'default',
  size = 'default',
  children,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  return (
    <button
      ref={ref}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;