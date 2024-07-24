import { headers } from 'next/headers';

/**
 * @info Accesses the current path on the server and returns the slug.
 * @returns {string} slug
 */
export const getSlug = () => {
  const headerList = headers();
  const pathname = headerList.get('x-current-path') || '';

  const locale = pathname.split('/')[1];
  const slug = pathname.split('/').slice(2).join('/');

  console.log('[SERVER] locale: ', locale);
  console.log('[SERVER] slug: ', slug);
  return slug;
};
