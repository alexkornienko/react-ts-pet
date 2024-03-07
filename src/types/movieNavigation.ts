import { ReactNode } from "react";

export interface IMovieNavigation {
  label: string;
  key: string;
  disabled?: boolean;
  icon?: ReactNode;
}
