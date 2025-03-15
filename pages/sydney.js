import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('https://scrapyard.info');
  }, [router]);

  return null;
}
