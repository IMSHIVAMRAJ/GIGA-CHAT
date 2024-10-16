import React ,{useContext} from 'react'
import './Main.css'
import { assets } from '../../assets/assets/assets'
import { Context } from '../../context/context'
const Main = () => {

  const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p className = "giga">GigaChad</p>
        <img src= {assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        { !showResult?
        <>
        <div className="greet">
          <p> <span> Hey Chad </span></p>
          <p> How can I help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Briefly summarize this concept : urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p> Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Improve the readability of the following code </p>
            <img src={assets.code_icon} alt="" />
          </div>

        </div>
        </>
         : <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
      
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ? <div className = 'loader'>
              <hr />
              <hr />
              <hr />
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p> 
            // {/* it will display all the tags that are available in that text and if we want to hide that tag and display it as html tag then we can use it */}
            }
          
          </div>
         </div>
        }
        
        <div className="main-bottom">
          <div className="search-box">
            <input /*to update our input*/ onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
  
          <img src={assets.gallery_icon} alt="" />
          <img src= {assets.mic_icon} alt="" />
          <img onClick={()=>onSent()}src={assets.send_icon} alt="" />
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default Main
