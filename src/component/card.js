import React from 'react';
import { useHover } from '../services/customHook';

export default function DisplayData({ filter: filter }) {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef}>
      {filter.map((kuroko) => (
        <div key={kuroko.mal_id}>
          {isHovered ? '😁' : '☹️'}
          <h1>{kuroko.title}</h1>
          <img src={kuroko.images.jpg.image_url} alt={kuroko.title}></img>
          <>Favorited: {kuroko.favorites}</>
        </div>
      ))}
      ;
    </div>
  );
}
