import { ReactNode } from 'react';

export type TCardProps = {
  children: ReactNode;
  header?: ReactNode;
  title?: string;
  titleCenter?: boolean;
  onAction?: () => void;
};
