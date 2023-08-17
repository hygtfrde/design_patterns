import React, { useEffect } from 'react';

const BrowserDetect = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent;

    let browserName = 'Unknown';

    if (userAgent.includes('Chrome')) {
        browserName = 'Chrome';
    } else if (userAgent.includes('Firefox')) {
        browserName = 'Firefox';
    } else if (userAgent.includes('Safari')) {
        browserName = 'Safari';
    } else if (userAgent.includes('Edge')) {
        browserName = 'Edge';
    } else if (userAgent.includes('Opera') || userAgent.includes('OPR')) {
        browserName = 'Opera';
    } else if (userAgent.includes('IE')) {
        browserName = 'Internet Explorer';
    } else {
        browserName = 'not detected';
    }

    console.log(`Detected Browser: ${browserName}`);
  }, []);

  return null;
};

export default BrowserDetect;
