import { ReactNode } from 'react';

export type TCardProps = {
  children: ReactNode;
  onAction?: () => void;
};
