import React from 'react';

function TagButton({ tag, handleTagClick }) {
  return (
    <button onClick={() => handleTagClick(tag)}>{tag}</button>
  );
}

export default TagButton;