import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/not-found.png"
        height="500"
        width="500"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src="/not-found-dark.png"
        height="500"
        width="500"
        alt="Error"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">You might be lost!</h2>
      <Button asChild>
        <Link href="/documents">Home</Link>
      </Button>
    </div>
  );
}

export default NotFound