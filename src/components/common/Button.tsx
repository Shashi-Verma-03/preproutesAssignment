import React from 'react'

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
}

const Button = ({type ,children, onClick, variant = "primary", disabled, className }: ButtonProps) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={`btn btn-${variant} ${className || ''  }`} disabled={disabled}>
        {children}
      </button>
    </div>
  )
}

export default Button
