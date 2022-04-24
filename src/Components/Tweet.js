import React, {useEffect, useState} from "react";
import "../Styles/Tweet.css"


//<p class="likes"></p>
//<p class="retweets">{props.retweets}</p>
// props are parameters in JAva script
const Tweet = props => {
    const [likes,setLikes] = useState(0);
    const [isLiked,setIsLiked] = useState(false);


    useEffect(()=>{
        let x = Math.random()
        if(x>0.5){
        setTimeout(()=> setLikes(likes+1),5000);
        }
      },[])

    return(

      <div class="container">

        <body>
        <div class="tweet-container">

            <div class="tweet-header">
                <img src="https://pbs.twimg.com/profile_images/1115644092329758721/AFjOr-K8_400x400.jpg"/>
                <div class="author-info">
                    <p class="name">{props.author}</p>
                    <p class="handle">{props.handle}</p>
                </div>
            </div>

            <p class="content">{props.content}</p>
            
            <div class="time-info">
                {/* <p class="time">{props.time}</p> */}
                <p class="date">{props.date}</p>
                <div className="likedImageSection">
                {isLiked ? <img className="likeImage" src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/red-heart.png" onClick={() => setIsLiked(false)}/> : <img className="likeImage" src="https://media.istockphoto.com/vectors/minimal-flat-heart-shape-icon-with-thin-black-line-on-white-vector-id1125688086" onClick={() => setIsLiked(true)} /> }
                </div>
            </div>
            
            <button onClick={() =>
                setLikes(likes+1)
            }>likes</button>
            <button onClick={() =>
                setLikes(likes-1)
            }>dislikes</button>
            <h2>Likes: {likes}</h2>

            
                
           
        </div>
        </body>
      </div>
    )
};

export default Tweet;