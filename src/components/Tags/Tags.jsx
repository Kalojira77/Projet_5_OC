import React from 'react';

function Tags({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag, index) => (
        <li key={index} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
