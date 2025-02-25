import { createElement } from "react";
import { SpinnerList, SpinnerType } from "./SpinnerList";
import classNames from "classnames";


interface SpinnerProps {
  icon?: SpinnerType;
  /**
   * `x * 4` (tailwind scale)
   * */
  height?: number;
  className?: string;
}

export function Spinner({ icon = 'InfiniteSpinner', height = 5, className }: SpinnerProps) {
  const iconFn = SpinnerList[icon];

  return (
    <span className={classNames(className, 'animate-pulse')}>
      {createElement(iconFn, { height })}
    </span>
  );
}
