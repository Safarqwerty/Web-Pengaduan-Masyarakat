import React from "react";

interface WordLimitProps {
  text: string;
  limit: number;
}

const WordLimit: React.FC<WordLimitProps> = ({ text, limit }) => {
  const words = text.split(" ");
  const truncatedText = words.slice(0, limit).join(" ");

  return (
    <p>
      {truncatedText}
      {words.length > limit && "..."}
    </p>
  );
};

export default WordLimit;
