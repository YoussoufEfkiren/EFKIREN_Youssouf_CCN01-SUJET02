import "bootstrap/dist/css/bootstrap.min.css";
import VoitureItem from "./VoitureItem";
import { useState } from "react";

const VoitureList = () => {
  const initialData = [
    {
      matricule: "X45/6789",
      marque: "Mercedes",
      model: "A Class",
      image:
        "https://raw.githubusercontent.com/YoussoufEfkiren/EFKIREN_Youssouf_CCN01-SUJET02/refs/heads/main/public/Mercedes.jpeg",
      carburant: "essence",
      color: "",
      prixAchat: 10000,
    },
    {
      matricule: "Z12/3456",
      marque: "Audi",
      model: "A1",
      image:
        "https://raw.githubusercontent.com/YoussoufEfkiren/EFKIREN_Youssouf_CCN01-SUJET02/refs/heads/main/public/Audi.jpeg",
      carburant: "diesel",
      color: "",
      prixAchat: 9000,
    },
    {
      matricule: "Q34/1234",
      marque: "BMW",
      model: "2er Gran Tourer",
      image:
        "https://raw.githubusercontent.com/YoussoufEfkiren/EFKIREN_Youssouf_CCN01-SUJET02/refs/heads/main/public/BMW.jpeg",
      carburant: "essence",
      color: "",
      prixAchat: 120000,
    },
    {
      matricule: "K87/8901",
      marque: "Chevrolet",
      model: "Camaro",
      image:
        "https://raw.githubusercontent.com/YoussoufEfkiren/EFKIREN_Youssouf_CCN01-SUJET02/refs/heads/main/public/Chevrolet.jpeg",
      carburant: "essence",
      color: "",
      prixAchat: 200000,
    },
  ];

  const [data, setData] = useState(initialData);

  const totalVoitures = data.length;

  // Compter le nombre total de voitures par marque
  const countByMarque = data.reduce((acc, voiture) => {
    acc[voiture.marque] = (acc[voiture.marque] || 0) + 1;
    return acc;
  }, {});

  // Trouver la voiture avec le prix maximal
  const voitureMax = data.reduce((prev, current) => {
    return prev.prixAchat > current.prixAchat ? prev : current;
  }, data[0]);

  // Fonction pour supprimer une voiture
  const handleDelete = (model) => {
    setData(data.filter((voiture) => voiture.model !== model));
  };

  return (
    <div className="container">
      <h2 className="my-4">Liste des Voitures ( Sujet 02 )</h2>
      <div className="row">
        {data.map((voiture, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <VoitureItem
              matricule={voiture.matricule}
              marque={voiture.marque}
              model={voiture.model}
              image={voiture.image}
              carburant={voiture.carburant}
              prixAchat={voiture.prixAchat}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>

      <div
        className="my-4"
        style={{ border: "1px solid #ccc", padding: "20px" }}
      >
        <h4>Nombre total de voitures par marque :</h4>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Marque
              </th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>
                Nombre
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(countByMarque).map(([marque, count]) => (
              <tr key={marque}>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {marque}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                  {count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4 style={{ marginTop: "20px" }}>
          Nombre Total de Voitures : {totalVoitures}
        </h4>
        <h4 style={{ marginTop: "20px" }}>Voiture ayant le prix maximal :</h4>
        <div
          style={{
            borderBottom: "1px solid red",
            width: "30%",
            margin: "15px",
          }}
        >
          <h5 style={{ fontWeight: "bold", color: "red" }}>
            {`${voitureMax.marque} - ${voitureMax.matricule} : ${voitureMax.prixAchat} €`}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default VoitureList;
