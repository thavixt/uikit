import classNames from "classnames";
import { PropsWithChildren } from "react";
import { CommonProps } from "../../common/commonProps";
import { Spinner } from "../Illustration/Spinner/Spinner";

export interface ButtonProps extends PropsWithChildren<CommonProps<HTMLButtonElement>> {
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'secondary' | 'danger',
  type?: HTMLButtonElement['type'],
  loading?: boolean;
  disabled?: boolean;
}

export function Button({ disabled, loading, ref, onClick, type = 'button', className, children, variant = 'default' }: ButtonProps) {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={loading}
      className={
        classNames(
          'min-w-16 px-2 py-1 rounded-sm shadow-gray-400 hover:shadow-sm active:shadow-none transition-shadow',
          {
            'cursor-pointer': !(disabled || loading),
            'cursor-not-allowed opacity-60': disabled || loading,
            'text-slate-700 bg-gray-200 dark:bg-slate-300': variant === 'default',
            'text-slate-100 bg-green-600': variant === 'primary',
            'text-slate-100 bg-indigo-500': variant === 'secondary',
            'text-slate-100 bg-red-500': variant === 'danger',
          },
          className,
        )
      }
    >
      <div className="flex items-center justify-center">
        {loading ? <Spinner icon="TubeSpinner" /> : children}
      </div>
    </button>
  )
}
