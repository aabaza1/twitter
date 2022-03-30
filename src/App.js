import React, {useState} from 'react';
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Tweet from './Components/Tweet.js';
import SearchBar from './Components/SearchBar.js';




// parameters, called props in Javascript

function App() {
  const[content, setContent] = useState("")
  const[tweets,setTweets] = useState([])
  const[search,setSearch] = useState("")

  return (
    <div>
      <div>
        <SearchBar search={search} setSearch={setSearch}/>
        {/* {search} */}
        <Header />
        <input placeholder="tweet content" value={content} onChange={(e) => setContent(e.target.value)}/>
        <button onClick={() => setTweets([...tweets, {author: "jack", handle:"@jack", content:content,time:"5:32 pm", date: new Date().toLocaleString()}])} >
        Create Tweet
        </button>
      </div>

      <div>
      {/* {tweets.map((tweets,i) =>( */}
        {/* <Tweet content={tweets.content} author="jack" handle="@jack" time="5:32 pm" date={tweets.date} key={i} />))} */}
        {/* <Tweet author="jack" handle="@jack" content="a tweet" time="5:32 pm" date="Mar 2"/> */}
        {/* <Tweet author="jack" handle="@jack" content="a tweet" time="5:32 pm" date="Mar 2"/> */}
        {/* <Tweet author="jack" handle="@jack" content="a tweet" time="5:32 pm" date="Mar 2"/> */}
      </div>


      <div>
        <Body />
      </div>

      <div>
      {tweets.filter((t) =>t.content.includes(search)).map((tweets,i) =>(
        <Tweet content={tweets.content} author="jack" handle="@jack" time="5:32 pm" date={tweets.date} key={i} />))}
        {/* <Tweet author="jack" handle="@jack" content="a tweet" time="5:32 pm" date="Mar 2"/> */}
        {/* <Tweet author="jack" handle="@jack" content="a tweet" time="5:32 pm" date="Mar 2"/> */}
        {/* <Tweet author="jack" handle="@jack" content="a tweet" time="5:32 pm" date="Mar 2"/> */}
      </div>


    </div>
    
  );
}

export default App;
