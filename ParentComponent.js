import React, { useRef } from 'react';

const ParentComponent = () => {
  const iframeRef = useRef(null);

  const handleSubmit = () => {
    // Access the <form> inside the iframe and submit it
    const iframeContent = iframeRef.current.contentDocument;
    const form = iframeContent.getElementById('postForm');
    form.submit();
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit via iFrame</button>
      <iframe
        title="Hidden iFrame"
        ref={iframeRef}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ParentComponent;