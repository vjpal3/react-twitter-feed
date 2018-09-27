import React from 'react';
import Tweet from '../components/Tweet';

// <Grocery
//         key={grocery.id}
//         name={grocery.name}
//         handleButtonClick={props.handleButtonClick}
//       />

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

  // {
  //   id_str: '702194866168528896',
  //   text: '"Is React Native ready for production? Yes" - @JI pic.twitter.com/EgRMriTgMz',
  //   user: {
  //      name: 'React.js Newsletter',
  //      screen_name: 'reactnewsletter',
  //      profile_image_url: 'https://s3.amazonaws.com/horizon-production/images/twitter-feed-reactjs-newsletter.png'
  //   },
  //   retweet_count: 21,
  //   favorite_count: 18,
  //   entities: {
  //     media: [
  //       {
  //         media_url: 'https://s3.amazonaws.com/horizon-production/images/twitter-feed-reactjs-newsletter-media.jpg',
  //         display_url: 'pic.twitter.com/EgRMriTgMz'
  //       }
  //     ]
  //   },
  //   favorited: false,
  //   retweeted: false,
  //   timestamp_ms: '1456251276000'
  // }
