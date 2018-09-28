import React from 'react';

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
          <p className="tweet-info"><span className="user-info">
                {props.userName}&nbsp;
                <span className="user-info-date">
                  @{props.userScreenName}
                </span>
              </span>
          <br />
          {props.text}</p>

          { props.mediaUrl.length > 0 &&
            <img className="mediaImage"
              src={props.mediaUrl}
              alt="Media file"
            />
          }

          <p className="tweet-info">
            <span className="icons reply"><i className="fa fa-reply" aria-hidden="true"></i></span> &emsp;&emsp;&emsp;
            <span className={props.retweeted ? 'retweet' : 'icons'} >
              <i className="fa fa-retweet" aria-hidden="true"></i>
              &nbsp;&nbsp; {props.retweetCount}
            </span> &emsp;&emsp;&emsp;
            <span className={props.favorited ? 'favorite' : 'icons'}>
              <i className="fa fa-heart" aria-hidden="true"></i>
              &nbsp;&nbsp; {props.favoriteCount}
            </span> &emsp;&emsp;&emsp;
            <span className="icons more"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
