/** @format **/

import CandyCard from "./CandyCard";
import candybox from "./candyData";

const CookieList = () => {
    return (
    <div className="cookie_container">
        {candybox.map((candy, index) => (
            <CandyCard key={index} cookie={candy} />
        ))}
    </div>
    );
};

export default CookieList;