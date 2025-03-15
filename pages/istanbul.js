'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://forms.office.com/r/ijAJ0SiVBC'); 
  }, [router]);

  return null; 
}
