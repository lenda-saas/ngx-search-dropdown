export type SelectedItem = {
  value: string;
  column: string;
};

export type Theme = {
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  textLight?: string;
  textBlack?: string;
  mode?: 'light' | 'dark';
};
