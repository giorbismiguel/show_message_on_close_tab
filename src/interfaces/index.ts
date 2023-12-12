export type ItemType = {
  link?: string;
  label: string | JSX.Element;
  key: string;
  type?: string;
  children?: ItemType[];
};
