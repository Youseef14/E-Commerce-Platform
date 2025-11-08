import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'font-medium transition-all duration-200 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200',
    secondary: 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-900 dark:border-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-700',
    outline: 'bg-transparent text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-600 hover:border-neutral-900 dark:hover:border-neutral-400',
    text: 'bg-transparent text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
