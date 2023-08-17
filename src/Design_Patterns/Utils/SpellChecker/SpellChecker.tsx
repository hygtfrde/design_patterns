import React, { useState } from 'react';

interface SpellCheckerProps {
  text?: string;
  children?: React.ReactNode;
}

const SpellChecker: React.FC<SpellCheckerProps> = ({ text, children }) => {
  const [errorCount, setErrorCount] = useState<number>(0);

  const dictionary = ['apple', 'banana', 'orange'];

  const checkSpelling = (inputText: string): number => {
    const words = inputText.toLowerCase().split(/\s+/);
    let count = 0;

    words.forEach(word => {
      if (!dictionary.includes(word)) {
        count++;
      }
    });

    return count;
  };

  const handleCheck = () => {
    let count = 0;

    if (text) {
      count = checkSpelling(text);
    } else if (children) {
      const childrenText = React.Children.toArray(children)
        .map(child => (typeof child === 'string' ? child : ''))
        .join(' ');
      count = checkSpelling(childrenText);
    }

    setErrorCount(count);
  };

  return (
    <div>
      {text && <p>{text}</p>}
      {children && children}
      <button onClick={handleCheck}>Check Spelling</button>
      {errorCount > 0 && <p>{errorCount} spelling errors found.</p>}
    </div>
  );
};

export default SpellChecker;
