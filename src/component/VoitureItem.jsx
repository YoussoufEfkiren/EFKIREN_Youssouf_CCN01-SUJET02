import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const VoitureItem = ({ matricule, marque, image, carburant, model,prixAchat, onDelete }) => {
    const [filter, setFilter] = useState('none');

    
    const changeColor = () => {
        const newFilter = filter === 'none' ? 'grayscale(100%)' : 'none';
        setFilter(newFilter);
    };

    return (
        <div className="card" style={{ width: '100%' }}>
            <img
                src={image}
                className="card-img-top"
                alt={marque}
                style={{ height: '200px', objectFit: 'cover', filter: filter }} 
            />
            <div className="card-body">
                <h5 className="card-title">{`${marque} - ${matricule}`}</h5>
                <p className="card-text">
                    <strong>Carburant:</strong> {carburant}<br />
                    <strong>Prix Achat:</strong> {prixAchat} €
                </p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary me-2" onClick={changeColor}>Changer Couleur</button>
                    <button className="btn btn-outline-danger" onClick={() => onDelete(model)}>Supprimer</button>
                </div>
                <div style={{marginTop: '20px'}}>
                    <p className="mt-2"><strong>Prix:</strong> {prixAchat} €</p>
                </div>
            </div>
        </div>
    );
};

export default VoitureItem;
