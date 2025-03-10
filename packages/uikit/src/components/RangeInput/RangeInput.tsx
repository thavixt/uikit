import classNames from "classnames";
import { ReactElement, useEffect, useState } from "react";
import { CommonProps } from "../../common/commonProps";
import { WithLabel } from "../../common/WithLabel";
import { themedInputClasses } from "../../common/theme";
import { Typography } from "../Typography/Typography";

export interface RangeInputProps extends Omit<CommonProps<HTMLInputElement>, 'children'> {
  defaultValue?: number;
  label?: string;
  max: number;
  min: number;
  step?: number;
  disabled?: boolean;
  required?: boolean;
  /**
   * also a `name` to associate with a `<form>`
   */
  name: string;
  value?: number;
  transformValue?: (value: number, min: number, max: number) => string | number;

  /**
   * element to render after the input
   */
  after?: (value: string | number, min: number, max: number) => ReactElement;
  /**
   * element to render before the input
   */
  before?: (value: string | number, min: number, max: number) => ReactElement;
  onChange?: (value: number, transformedValue: string | number) => void;

  /** Display vertically */
  vertical?: boolean;
  /** (default `true`) Display the current input value */
  showValue?: boolean;
}

export function RangeInput({ required, showValue = true, ref, ...props }: RangeInputProps) {
  const classes = classNames(
    'flex space-x-2 bg-slate-400 rounded-md h-2',
    themedInputClasses,
    props.className,
  );

  const [currentValue, setCurrentValue] = useState(props.defaultValue ?? props.value ?? 0);

  const getValue = (v: number): number | string => {
    if (props.transformValue) {
      return props.transformValue(v, props.min, props.max);
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
        {props.before?.(getValue(currentValue), props.min, props.max)}
        <input
          ref={ref}
          required={required}
          className={classes}
          defaultValue={typeof props.value === 'undefined' ? props.defaultValue : undefined}
          disabled={props.disabled}
          max={props.max}
          min={props.min}
          name={props.name}
          id={`${props.name}-range`}
          onChange={onChange}
          step={props.step}
          type="range"
          value={props.value}
        />
        {showValue ? <Typography.Label className="">{getValue(currentValue)}</Typography.Label> : null}
        {props.after?.(getValue(currentValue), props.min, props.max)}
      </div>
    </WithLabel>
  )
}