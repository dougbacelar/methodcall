import React from 'react';

export default ({ children }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <main style={{ maxWidth: '45rem' }}>{children}</main>
  </div>
);
