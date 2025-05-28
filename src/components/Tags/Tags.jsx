import React from 'react';
import './Tags.scss';

function Tags({ tags, label = 'Mots-clés' }) {
  return (
    <div className="tags" role="list" aria-label={label}>
      {tags.map((tag, index) => (
        <span key={index} className="tag" role="listitem">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
