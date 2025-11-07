import React from "react";

// Main Card wrapper
export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      {children}
    </div>
  );
};

// Card header wrapper
export const CardHeader = ({ children, className }) => {
  return <div className={`mb-2 ${className}`}>{children}</div>;
};

// Card title wrapper
export const CardTitle = ({ children, className }) => {
  return <h3 className={`font-semibold text-sm ${className}`}>{children}</h3>;
};

// Card content wrapper
export const CardContent = ({ children, className }) => {
  return <div className={`text-gray-700 ${className}`}>{children}</div>;
};
