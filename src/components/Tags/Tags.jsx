import React from 'react';
import './Tags.scss';

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
