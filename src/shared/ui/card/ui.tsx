import { ActionMenuIcon } from '@icons';
import { cn } from '@libs';
import { FC, useCallback } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@ui';
import { TCardProps } from './types';

export const Card: FC<TCardProps> = ({
  children,
  header,
  titleCenter,
  title,
  onAction,
}) => {
  const actionHandler = useCallback(() => {
    if (onAction) {
      onAction();
    }
  }, [onAction]);

  return (
    <div className="px-5 py-3.5 rounded-xl bg-white relative shadow mb-2.5">
      <header className={cn('flex items-center', titleCenter ? '' : 'justify-between')}>
        <h1
          className={cn('text-2xl font-bold flex-1', {
            'self-center text-center': titleCenter,
          })}
        >
          {title}
        </h1>
        {header}
        <DropdownMenu>
          <DropdownMenuTrigger
            className="bg-transparent flex justify-end"
            onClick={actionHandler}
          >
            <ActionMenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      {children}
    </div>
  );
};
