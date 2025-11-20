import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";

const AboutMe = () => {

    const [aboutMe, setAboutMe] = useState();

    useEffect(() => {

        fetch(`${base_url}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => {
                let {id,edited,created,homeworld,image,...restOfData} = data,
                setAboutMe(restOfData)
            }
            )
            .catch(() => setAboutMe('Error'));

    }, [])

    return (
        <p className="far-galaxy">{aboutMe}</p>

    )
}

export default AboutMe;