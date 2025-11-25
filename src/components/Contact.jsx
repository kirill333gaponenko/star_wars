
import {useEffect, useState} from "react";
import {base_url, millsecToDay} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {

        const planets_storage =  localStorage.getItem('planets');



        const now = (new Date()).getTime();

        if(planets_storage && (Math.abs(planets_storage.time -now)/millsecToDay) <30) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPlanets(JSON.parse(JSON.stringify(planets_storage)))
        }else{
            fetch(`${base_url}/v1/planets`)
                .then(response => response.json())
                .then(data => {

                    const planets_arr = data.map(planet => planet.name)
                    localStorage.setItem('planets', JSON.stringify(planets_arr))
                    setPlanets(planets_arr)
                })
        }



    },[])





    return (
        <div className="container">
            <form action="#" >

                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label >Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label >Country</label>
                <select id="planet" name="planet">
                    {/*<option value="australia">Australia</option>*/}

                    {planets.map(planet => <option value={planet} >{planet}</option>)}


                </select>

                <label >Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    )
}

export default Contact;