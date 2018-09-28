import React from 'react';
import Tweet from '../components/Tweet';

const TwitterFeed = (props) => {
  let feed = props.data.map(tweetData => {
    let media_url="";
    if(Object.getOwnPropertyNames(tweetData.entities).length !== 0) {
      media_url=tweetData.entities.media[0].media_url
    }
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
