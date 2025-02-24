import classNames from "classnames";
import { CommonProps } from "../common";
import { WithLabel } from "../common/WithLabel";

export interface NumberInputProps extends Omit<CommonProps, 'children'> {
  value?: number;
  defaultValue?: number;
  name?: string;
  label?: string;
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
}

export function NumberInput({ name, label, min = 0, max = 999_999, onChange: providedOnChange, ...props }: NumberInputProps) {
  const classes = classNames(
    'text-black border rounded-md border-slate-600',
    'text-center w-32',
    props.className,
  );

  const onChange: React.FormEventHandler<HTMLInputElement> = (e) => {
    const value = Math.min(Math.max(+e.currentTarget.value, min), max);
    providedOnChange?.(value);
  }

  return (
    <WithLabel label={label} name={name}>
      <input
        className={classes}
        name={name}
        type="number"
        min={min}
        max={max}
        onChange={onChange}
        {...props}
      />
    </WithLabel>
  )
}