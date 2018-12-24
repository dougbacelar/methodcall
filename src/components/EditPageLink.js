import React from 'react';
import EditIcon from './icons/EditIcon';
import GitHubIcon from './icons/GitHubIcon';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const GITHUB_PAGES_LINK =
  'https://github.com/dougbacelar/methodcall/blob/master/src/pages';

const getEditPageLink = (slug) => `${GITHUB_PAGES_LINK}${slug.slice(0, -1)}.md`;

export default ({ slug, style, useGithubIcon }) => (
  <OutboundLink
    href={getEditPageLink(slug)}
    rel='noopener noreferrer'
    style={{
      backgroundImage: 'none',
      marginLeft: '0.3rem',
      ...style,
    }}
    target='_blank'>
    {useGithubIcon ? (
      <GitHubIcon />
    ) : (
      <>
        <EditIcon />
        edit this page on GitHub
      </>
    )}
  </OutboundLink>
);
