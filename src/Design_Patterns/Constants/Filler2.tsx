import React from "react";

const Filler2 = () => {
  const loremIpsumWords = [
    "Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.",
  ];

  const style = {
    fontWeight: 900,
    fontSize: 14
  };

  const paragraphs = Array.from({ length: 10 }, (_, index) => {
    const words = loremIpsumWords.slice(index * 10, (index + 1) * 10).join(" ");
    return <p key={index} style={style}>{words}</p>;
  });

  return <>{paragraphs}</>;
};

export default Filler2;
