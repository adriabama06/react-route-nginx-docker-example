import { useEffect, useState } from "react"

function App() {
  const [description, setDescription] = useState("adriabama06 is a YouTuber know as Adrià, and ...");  

  async function getInfo() {
    const res = await fetch("https://random-data-api.com/api/v2/users");
    const data = await res.json();
    return data;
  }

  useEffect(() => {
    getInfo()
    .then((data) => {
      setDescription(() => `adriabama06 is a YouTuber know as Adrià, and actually has ${data.social_insurance_number} subscribers and ${data.id} videos`);
    })
    .catch(() => {
      setDescription(() => "adriabama06 is a YouTuber know as Adrià, and ... Error getting the realtime information");
    })
  }, []);

  return (
    <div className='card'>
      <div className='title'>
        <h1>Info</h1>
        <h4>Who is adriabama06?</h4>
        <p>There is info about the YouTuber adriabama06</p>
        <div className='line'/>
      </div>
      <div className='content'>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default App
