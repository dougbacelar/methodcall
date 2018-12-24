import React from 'react';
import EditIcon from './icons/EditIcon';

const GITHUB_PAGES_LINK =
  'https://github.com/dougbacelar/methodcall/blob/master/src/pages';

const getEditPageLink = (slug) => `${GITHUB_PAGES_LINK}${slug.slice(0, -1)}.md`;

export default ({ slug }) => (
  <a
    href={getEditPageLink(slug)}
    rel='noopener noreferrer'
    style={{ backgroundImage: 'none', display: 'flex', float: 'right' }}
    target='_blank'>
    <EditIcon />
    edit this page on GitHub
  </a>
);
