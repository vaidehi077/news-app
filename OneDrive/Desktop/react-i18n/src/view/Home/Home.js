import React, {  useState } from 'react'
import './Home.css'
import I18n from './../../utlis/I18n';
function Home() {

    const [lang, setLang] = useState("en");

    const usersCount = null;

    return (
        <div>
            <h1>{I18n("welcomeMessage")}</h1>
            <h2>{I18n( "normalMessage")}</h2> 
            <p className='greet-msg'>{I18n("greetingMessage")}</p>
            <hr/>
            <select defaultValue={localStorage.getItem("lang")} onChange={(e) => {
                localStorage.setItem("lang", e.target.value);
                window.location.reload();
            }}>
                <option value="hi">Marathi</option>
                <option value="mr">Hindi</option>
                <option value="en">English</option>
            </select >
            <p className='user-title'>
                {I18n("usersStateMessage", "<studentCount>", usersCount)}
            </p>
        </div>
    )
}

export default Home
