import React from 'react';

export default ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <main style={{ flexGrow: 1, maxWidth: '45rem' }}>{children}</main>
  </div>
);
