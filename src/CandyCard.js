/** @format **/

import { useState } from "react";

const CandyCard = ({ cookie }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="cookie-card">
            <img
              src={cookie.image}
              alt={cookie.image}
              style={{
                padding: "10px 20px",
                textAlign: "center",
                color: "goldenrod",
                background: "pink",
                width: "150px",
                height: "150px",
              }}
              />
              <h3>{cookie.name}</h3>

              <button onClick={handleOpenModal}>Show Info</button>

              {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <br/>
                        <br/>
                        <h2>Candy Info:</h2>
                        <p>{cookie.description}</p>
                        <p>Calories: {cookie.calories}</p>
                        <p>Ingredients:</p>
                        <p>{cookie.ingredients}</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
      )}

        </div>
    );
};

export default CandyCard;