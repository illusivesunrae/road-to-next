'use client';

import { useState } from 'react';
import { Heading } from './heading';

export default function Page() {
  const title = 'Hello page';
  const description = 'This is a react primer.';

  const [upvote, setUpvote] = useState(0);

  const handleUpvote = () => {
    setUpvote(upvote + 1);
  };

  return (
    <div>
      <Heading title={title} description={description}>
        <button onClick={handleUpvote}>Upvote ({upvote})</button>
      </Heading>
      <p>Content</p>
    </div>
  );
}
