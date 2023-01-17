import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Protected(props: { children: any }) {
  const router = useRouter();
  let tempAuth = true; // change later to use Context thingy
  useEffect(() => {
    if (!tempAuth) {
      router.push('/login');
    }
  }, [router, tempAuth]);

  return props.children;
}
