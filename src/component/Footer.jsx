import ButtonFooter from "./ButtonFooter.jsx";
import {itemsFooter} from "../utils/constants.js";

const Footer = () => {
    return (

            <footer className="rounded-bottom-4 row align-items-center mx-0">
                {itemsFooter.map(item =><ButtonFooter buttonText={item} key={item}/>)}
            </footer>

    )
}
//TODO 16.11
export default Footer;