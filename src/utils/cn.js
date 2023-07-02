import { twJoin, twMerge } from 'tailwind-merge';

export function cn(...classNames) {
  return twMerge(twJoin(...classNames));
}
