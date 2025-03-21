import classNames from "classnames";
import { CommonProps } from "../../common/commonProps";
import { WithLabel } from "../../common/WithLabel";
import { themedInputClasses } from "../../common/theme";
import { sortObjectByKeys } from "../../common/utils";
import { useMemo } from "react";

export interface SelectProps<T extends Record<string, string>> extends Omit<CommonProps<HTMLSelectElement>, 'children' | 'onChange' | 'defaultValue'> {
  defaultValue?: keyof T;
  disabled?: boolean;
  label?: string;
  name: string;
  onChange?: (value: keyof T) => void;
  placeholder?: string;
  value?: keyof T;
  options: T;
  required?: boolean;
}

export function Select<T extends Record<string, string>>({
  defaultValue,
  disabled,
  label,
  name,
  onChange: providedOnChange,
  options,
  placeholder,
  ref,
  value,
  required,
  ...props
}: SelectProps<T>) {
  const id = `${name}-select`;
  const classes = classNames(
    'w-fit text-left border rounded-sm',
    themedInputClasses,
    props.className,
  );

  const sortedOptions = useMemo(() => sortObjectByKeys(options), [options]);
  const onChange: React.FormEventHandler<HTMLSelectElement> = (e) => {
    providedOnChange?.(e.currentTarget.value as keyof T);
  }

  return (
    <WithLabel data-testid="SelectInput" label={label} id={id} required={required}>
      <select
        ref={ref}
        className={classes}
        defaultValue={defaultValue as string}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        value={value as string}
      >
        <option value="" disabled>{placeholder ?? 'Choose an option'}</option>
        {Object.entries(sortedOptions).map(([key, value]) => (
          <option key={key} value={key}>{value}</option>
        ))}
      </select>
    </WithLabel>
  )
}