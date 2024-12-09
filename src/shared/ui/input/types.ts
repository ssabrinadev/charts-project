import { ReactNode } from "react";

export type TInputProps = React.ComponentProps<'input'> & {
  icon?: ReactNode;
};