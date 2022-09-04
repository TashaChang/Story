import React from "react";

const Card = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="container">
      <div>
        <a target="_blank" href={image.largeImageURL}>
          <img src={image.webformatURL} alt="Pics" />
        </a>
      </div>
      <div className="text">
        <h3>Photo by {image.user}</h3>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div>
        {tags.map((t, index) => (
          <span key={index}>#{t}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
