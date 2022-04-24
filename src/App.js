import React, {useEffect, useState} from 'react';
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import Tweet from './Components/Tweet.js';
import SearchBar from './Components/SearchBar.js';
import "./Styles/App.css"
import Login from './Components/Login';
import Logout from './Components/Logout';

import {db} from "./firebase.js"
import {collection,addDoc,getDocs} from "firebase/firestore"


// parameters, called props in Javascript

function App() {
  const[content, setContent] = useState("")
  const[tweets,setTweets] = useState([])
  const[search,setSearch] = useState("")
  const[user,setUser] = useState("Not Logged In")
  useEffect(()=>{
    let temp= [];
    getDocs(collection(db,"tweets")).then((snapshot) =>{
      snapshot.forEach((doc)=>temp.push(doc.data()));
      setTweets(temp);
     })
  },[]);

   function postAnddisplay (){
    addDoc(collection(db,"tweets"),{author: user, handle:"@jack", content:content,time:"5:32 pm", date: new Date().toLocaleString() })
    setTweets([...tweets, {author: user, handle:"@jack", content:content,time:"5:32 pm", date: new Date().toLocaleString()}])
   }

  return (
    <div>
      <div>
        <p>Hello world</p>
        <Login name={user} setName={setUser}/>
        <SearchBar search={search} setSearch={setSearch}/>
        {/* {search} */}
        <Header />
        <input placeholder="tweet content" value={content} onChange={(e) => setContent(e.target.value)}/>

        {/* <button onClick={() => addDoc(collection(db,"tweets"),{author: "jack", handle:"@jack", content:content,time:"5:32 pm", date: new Date().toLocaleString() })} >
        Create Tweet
        </button> */}

        <button onClick={() => postAnddisplay()} >
        Create Tweet
        </button>

        {/* <button onClick={() => setTweets([...tweets, {author: "jack", handle:"@jack", content:content,time:"5:32 pm", date: new Date().toLocaleString()}])} >
        Create Tweet
        </button> */}
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
        {/* {JSON.stringify(tweets)} */}
      </div>

      <div>
      {tweets.filter((t) =>t.content.includes(search)).map((tweets,i) =>(
        <Tweet content={tweets.content} author={tweets.author} handle="@jack" time="5:32 pm" date={tweets.date} key={i} />))}
        {/* <Tweet author="jack" handle="@jack" content="a tweet" time="5:32 pm" date="Mar 2"/> */}
        {/* <Tweet author="jack" handle="@jack" content="a tweet" time="5:32 pm" date="Mar 2"/> */}
        {/* <Tweet author="jack" handle="@jack" content="a tweet" time="5:32 pm" date="Mar 2"/> */}
      </div>

    <Logout name={user} setName={setUser}/>
    </div>
    
  );
}

export default App;
