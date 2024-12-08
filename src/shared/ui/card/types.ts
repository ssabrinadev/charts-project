import { ReactNode } from 'react';

export type TCardProps = {
  children: ReactNode;
  title?: string;
  titleCenter?: boolean;
  onAction?: () => void;
};
