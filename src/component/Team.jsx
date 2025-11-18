import {imgItemsTeam} from "../utils/constants.js";
import ImgTeam from "./ImgTeam.jsx";


const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-4 ms-2 me-0">
            <h2 className="text-center text-center">Dream team</h2>
            {imgItemsTeam.map((f, i) => <ImgTeam friend={f} key={i} pos={i + 1} />)}
        </section>
    );
};


export default DreamTeam;
