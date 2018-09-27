import React from 'react';

// <Tweet
//   Key={tweetData.id_str}
//   text={tweetData.text}
//   userName={tweetData.user.name}
//   userScreenName={tweetData.user.screen_name}
//   userProfilePic={tweetData.user.profile_image_url}
//   retweetCount={tweetData.retweet_count}
//   favoriteCount={tweetData.favorite_count}
//   favorited={tweetData.favorited}
//   retweeted={tweetData.retweeted}
// />

const Tweet = (props) => {
  return (
    <div className="grid-container tweet-div">
      <div className="grid-x grid-margin-x tweet-info-grid">
        <div className="cell small-2 img-cell">
          <img className="profileImg"
            src={props.userProfilePic}
            alt={props.userName}
          />
        </div>
        <div className="cell small-10 info-cell">
          <p><span className="user-info">
                {props.userName}&nbsp;
                <span className="user-info-date">
                  @{props.userScreenName}
                </span>
              </span>
          <br />
          {props.text}</p>

          { props.mediaUrl.length > 0 &&
            <img
              src={props.mediaUrl}
              alt="Media file"
            />
          }
        </div>
      </div>
    </div>

  );


};
export default Tweet;
