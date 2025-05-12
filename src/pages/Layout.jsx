
import React from 'react';
import { createPageUrl } from '../lib/utils';

export default function Layout({ children, currentPageName }) {
  // Simplified layout without authentication requirements
  return (
    <div className="min-h-screen bg-slate-950">
      {children}
    </div>
  );
}
