export interface SortByOrderProps {
  optionList: Array<{ label: string; value: string }>;
  onClickItem:(_value:string)=>void;
  selectedValue:string;
}
