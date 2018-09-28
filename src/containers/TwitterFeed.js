import React from 'react';
import Tweet from '../components/Tweet';
let karmaAlert = (event) => alert("Your Karma levelled up: 1");

const TwitterFeed = (props) => {
  let iconAlert = (iconName) => alert(iconName);

  let feed = props.data.map(tweetData => {
    let media_url="";
    let display_url="";
    if(Object.getOwnPropertyNames(tweetData.entities).length !== 0) {
      media_url=tweetData.entities.media[0].media_url
      display_url=tweetData.entities.media[0].display_url
    }

    let date = new Date(parseInt(tweetData.timestamp_ms));
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let dateString = `${months[date.getMonth()]} ${date.getDate()}`

    return (
      <Tweet
        key={tweetData.id_str}
        text={tweetData.text}
        userName={tweetData.user.name}
        userScreenName={tweetData.user.screen_name}
        userProfilePic={tweetData.user.profile_image_url}
        retweetCount={tweetData.retweet_count}
        favoriteCount={tweetData.favorite_count}
        favorited={tweetData.favorited}
        retweeted={tweetData.retweeted}
        mediaUrl={media_url}
        displayUrl={display_url}
        iconAlertProp={iconAlert}
        dateStringProp={dateString}
      />
    );
  });

  return(
    <div>
      {feed}
    </div>
  )
};

export default TwitterFeed;
