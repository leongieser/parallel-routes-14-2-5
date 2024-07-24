'use client';

import { usePathname } from 'next/navigation';

/**
 * @info Accesses the current path on the client and returns the slug.
 * @param {number} slice - The number of path segments to slice.
 * @returns {React.ReactNode} slug
 **/
export function CurrentRoute({
  slice = 2,
}: {
  slice?: number;
}): React.ReactNode {
  const pathname = usePathname();

  return <>{pathname?.split('/').slice(slice).join('/')}</>;
}
