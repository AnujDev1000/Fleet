import React from 'react'
import { IconType } from 'react-icons/lib'

interface buttonProps {
    label?: string,
    onclick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    Icon?: IconType
}

const Button:React.FC<buttonProps> = ({ label, onclick, disabled, outline, small, Icon }) => {
    return (
        <button onClick={onclick} disabled={disabled} className={ `relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
        ${outline ? 'bg-white' : 'bg-blue-500'} 
        ${outline ? 'border-black' : 'border-blue-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'py-1' : 'py-2'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-{1px}' : 'border-2'}` }>
            {Icon && (
                <Icon size={24} className='absolute left-4 top-3' />
            )}   
            {label}
        </button>
    )
}

export default Button
