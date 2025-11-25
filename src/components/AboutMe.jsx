import {base_url} from "../utils/constants.js";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [hero, setHero] = useState();
    useEffect(() => {
        const millsecToDay =1000*60*60*24;
        const hero_storage = localStorage.getItem("hero");
        const time_storage = +localStorage.getItem("time");
        const now = (new Date()).getTime();

        if(hero_storage && (Math.abs(time_storage -now)/millsecToDay) <30) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHero(JSON.parse(hero_storage));
        }else{
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    localStorage.setItem("hero", JSON.stringify(info));
                    localStorage.setItem("time", now);
                    setHero(info);
                })
        }
        }, [])



    return (
        <>
            {(!!hero) &&
                <div className='fs-2 lh-lg text-justify ms-5'>
                    <p><span className='display-3'>name:</span> {hero.name}</p>
                    <p><span className='display-3'>gender:</span> {hero.gender}</p>
                    <p><span className='display-3'>birth year:</span> {hero.birth_year}</p>
                    <p><span className='display-3'>height:</span> {hero.height}</p>
                    <p><span className='display-3'>mass:</span> {hero.mass}</p>
                    <p><span className='display-3'>hair color:</span> {hero.hair_color}</p>
                    <p><span className='display-3'>skin color:</span> {hero.skin_color}</p>
                    <p><span className='display-3'>eye color:</span> {hero.eye_color}</p>
                </div>
            }
        </>
    );
};

export default AboutMe;