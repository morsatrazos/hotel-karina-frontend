'use client';

import React, { useEffect } from 'react';
import HomePage from '../page';

export default function NosotrosPage() {
  useEffect(() => {
    const el = document.getElementById('nuestra-transformacion');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return <HomePage />;
}
