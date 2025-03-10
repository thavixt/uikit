import classNames from "classnames";

export type DataKey = string | number;
export type SortDirection = 'asc' | 'desc';

interface OnPageHandlerPayload<T> {
  current: T[];
  page: { current: number, next: number };
  pageSize: number;
  sort: { dir: SortDirection; column: DataKey };
}
export type OnPageHandler<T> = (params: OnPageHandlerPayload<T>) => Promise<
  {
    nextData: T[]
    pageCount: number,
    dataLength: number,
  }
>;

export const BUTTON_CLASSES = 'w-fit text-xs bg-transparent';
export const CHECK_ALL_KEY = 'table_check_all';
export const CHECK_COL_CLASSES = 'pl-3 pr-1 text-center w-12'
export const CONTAINER_CLASSES = 'size-full min-h-[200px] overflow-x-auto rounded-lg text-normal text-slate-500 dark:text-slate-300 shadow-lg';
const PADDING_CLASSES = 'px-4 py-2';
export const PLACEHOLDER_TR_CLASSES = 'h-11';
export const PLACEHOLDER_TD_CLASSES = 'flex space-x-2 items-center justify-center text-center max-w-md m-auto';
export const TABLE_CLASSES = 'table-auto w-full border-collapse text-sm bg-slate-100 dark:bg-slate-700';
export const TABLE_CONTAINER_CLASSES = 'w-full h-full min-h-0';
export const TABLE_ROW_HEIGHT = 44; // 4 * 11
export const TBODY_CLASSES = '';
export const TD_CLASSES = classNames(PADDING_CLASSES, 'whitespace-nowrap truncate max-w-[200px]');
export const TFOOTTD_CLASSES = classNames(PADDING_CLASSES);
export const TFOOT_CLASSES = 'sticky bottom-0 bg-slate-200 dark:bg-slate-800'
export const THEAD_CLASSES = 'sticky top-0 text-sm bg-slate-200 dark:bg-slate-800';
export const TH_CLASSES = classNames(PADDING_CLASSES, 'text-left truncate');
const TH_CLASSES_SORTABLE = classNames(TH_CLASSES, 'cursor-pointer flex space-x-1 items-center');
export const TH_CLASSES_SORTABLE_PRIMARY = classNames(TH_CLASSES_SORTABLE, 'justify-start');
export const TH_CLASSES_SORTABLE_REST = classNames(TH_CLASSES_SORTABLE, 'justify-end');
export const TR_CLASSES = classNames(PLACEHOLDER_TR_CLASSES, 'outline outline-gray-200 dark:outline-gray-600');