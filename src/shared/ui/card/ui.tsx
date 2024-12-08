import { ActionMenuIcon } from '@icons';
import { FC, useCallback } from 'react';
import { Button } from '@ui';
import { TCardProps } from './types';

export const Card: FC<TCardProps> = ({ children, onAction }) => {
  const actionHandler = useCallback(() => {
    if (onAction) {
      onAction();
    }
  }, [onAction]);

  return (
    <div className="px-5 py-3.5 rounded-xl bg-white relative">
      <Button
        variant="ghost"
        className="absolute top-4 right-5"
        onClick={actionHandler}
      >
        <ActionMenuIcon />
      </Button>
      {children}
    </div>
  );
};
