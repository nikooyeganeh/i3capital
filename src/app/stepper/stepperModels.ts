export interface StaepperItem {
  icon: string;
  title: string;
  subStep?: SubStepperItem[];
}

export interface SubStepperItem {
  title: string;
}
