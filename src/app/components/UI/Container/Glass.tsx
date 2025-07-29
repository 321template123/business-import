import React from 'react'

export default function Glass({className,children}:React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={`backdrop-blur-3xl ${className}`}>{children}</div>
	)
}
