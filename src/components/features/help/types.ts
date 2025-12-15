export interface HelpDataType {
  id: string;
  title: string;
  sub_title: string;
}

export interface HelpDetailType extends HelpDataType {
  content: string | null;
}
