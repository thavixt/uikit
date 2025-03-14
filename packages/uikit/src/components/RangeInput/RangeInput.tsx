import classNames from "classnames";
import { ReactElement, useEffect, useState } from "react";
import { CommonProps } from "../../common/commonProps";
import { WithLabel } from "../../common/WithLabel";
import { themedInputClasses } from "../../common/theme";
import { Typography } from "../Typography/Typography";

export interface RangeInputProps extends Omit<CommonProps<HTMLInputElement>, 'children' | 'onChange'> {
  defaultValue?: number;
  label?: string;
  max?: number;
  min?: number;
  step?: number;
  disabled?: boolean;
  required?: boolean;
  value?: number;
  onChange?: (value: number, transformedValue: string | number) => void;
  name: string;
  /** Display the current input value */
  showValue?: boolean;
  transformValue?: (value: number, min: number, max: number) => string | number;
  /** element to render after the input */
  after?: (value: string | number, min: number, max: number) => ReactElement;
  /** element to render before the input */
  before?: (value: string | number, min: number, max: number) => ReactElement;
}

export function RangeInput({ required, showValue = true, ref, min = 0, max = 100, defaultValue = 0, step = 1, ...props }: RangeInputProps) {
  const classes = classNames(
    'flex space-x-2 bg-slate-400 rounded-md h-2 cursor-pointer disabled:cursor-default',
    themedInputClasses,
    props.className,
  );

  const [currentValue, setCurrentValue] = useState(defaultValue ?? props.value ?? 0);

  const getValue = (v: number): number | string => {
    if (props.transformValue) {
      return props.transformValue(v, min, max);
    }
    return v;
  }
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const v = +e.target.value;
    setCurrentValue(v);
    props.onChange?.(v, getValue(v));
  }

  useEffect(() => {
    if (props.value) {
      setCurrentValue(props.value);
    }
  }, [props.value])

  return (
    <WithLabel data-testid="RangeInput" label={props.label} id={props.name} required={required}>
      <div className="flex space-x-1 items-center">
        {props.before?.(getValue(currentValue), min, max)}
        <input
          ref={ref}
          required={required}
          className={classes}
          defaultValue={typeof props.value === 'undefined' ? defaultValue : undefined}
          disabled={props.disabled}
          max={max}
          min={min}
          name={props.name}
          id={`${props.name}-range`}
          onChange={onChange}
          step={step}
          type="range"
          value={props.value}
        />
        {showValue ? <Typography.Label className="">{getValue(currentValue)}</Typography.Label> : null}
        {props.after?.(getValue(currentValue), min, max)}
      </div>
    </WithLabel>
  )
}