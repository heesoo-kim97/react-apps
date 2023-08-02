import React from 'react';

const IframeContent = () => {
  return (
    <form
      id="postForm"
      action="https://studio.bix5.net"
      method="POST"
      target="_top"
    >
      <input type="hidden" name="param1" value="value1" />
      <input type="hidden" name="param2" value="value2" />
    </form>
  );
};

export default IframeContent;