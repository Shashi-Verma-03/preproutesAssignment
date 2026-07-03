import React from 'react'

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const Button = ({type ,children, onClick, variant = "primary", disabled }: ButtonProps) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={`btn btn-${variant}`} disabled={disabled}>
        {children}
      </button>
    </div>
  )
}

export default Button
