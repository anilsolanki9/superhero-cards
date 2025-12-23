import React from 'react';
import Strip from './Strip.jsx';

const Card = props => {
  
  // let degree = 270;
  // let experience = 70;

  // Allstrips.forEach(function (strip, idx) {
  //   if (idx < (35 * experience) / 100) {
  //     strip.style.backgroundColor = `hsl(${degree}, 100%, 50%)`;
  //     degree -= 7;
  //   }
  // });

  const items = Array.from({ length: 35 }, (_, i) => ({
    id: i,
  }));

  return (
    <div className="card">
      <div className="user-details">
        <div className="user-images">
          <div className="banner-container">
            <img src={props.bannerIMG} alt="" className="banner" />
            <img src={props.profileIMG} alt="" className="profile" />
            <div className="exp">
              <span>Power </span>
              <div className="exp-grid">{<Strip items={items} powerLevel={props.powerLevel} />}</div>
            </div>
            <div className="follow">
              Follow <i className="ri-add-line"></i>
            </div>
          </div>
        </div>
        <div className="user-about">
          <h1>{props.name}</h1>
          <p>{props.about}</p>
        </div>
      </div>
      <div className="social-details">
        <div className="stats">
          <h3>{props.likedCount}</h3>
          <p>Likes</p>
        </div>
        <div className="stats">
          <h3>{props.postsCount}</h3>
          <p>Posts</p>
        </div>
        <div className="stats">
          <h3>{props.viewsCount}</h3>
          <p>Views</p>
        </div>
        <a href={props.instaIDUrl} target="_blank" className="link-icon">
          <i preload className="ri-instagram-line"></i>
        </a>
        <a href={props.twitterIDUrl} target="_blank" className="link-icon">
          <i className="ri-twitter-x-line"></i>
        </a>
        <a href={props.threadsIDUrl} target="_blank" className="link-icon last">
          <i className="ri-threads-line"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
