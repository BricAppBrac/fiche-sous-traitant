import React, { useEffect, useState } from "react";
import WritePdf from "../components/WritePdf";

const Home = () => {
  const [inputTravaux, setInputTravaux] = useState(["", "", "", "", ""]);
  const [tx1, setTx1] = useState("");
  const [tx2, setTx2] = useState("");
  const [tx3, setTx3] = useState("");
  const [tx4, setTx4] = useState("");
  const [tx5, setTx5] = useState("");
  const [facture, setFacture] = useState("");
  const [inputMateriel, setInputMateriel] = useState(["", "", "", "", ""]);
  const [mat1, setMat1] = useState("");
  const [mat2, setMat2] = useState("");
  const [mat3, setMat3] = useState("");
  const [mat4, setMat4] = useState("");
  const [mat5, setMat5] = useState("");
  const [temps, setTemps] = useState("");
  const [inputCoordonnees, setInputCoordonnees] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  // eslint-disable-next-line no-unused-vars
  const [coord1, setCoord1] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [coord2, setCoord2] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [coord3, setCoord3] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [coord4, setCoord4] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [coord5, setCoord5] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [coord6, setCoord6] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [coord7, setCoord7] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [coord8, setCoord8] = useState("");
  const [message, setMessage] = useState("");
  const [imageCoord, setImageCoord] = useState(null);
  const [imageMat1, setImageMat1] = useState(null);
  const [imageMat2, setImageMat2] = useState(null);

  const [fileInputKey, setFileInputKey] = useState(0);

  useEffect(() => {
    // Défilement vers le haut de la page au chargement
    window.scrollTo(0, 0);
  }, []);

  const handleHome = () => {
    console.log("handleHome");

    // Réinitialisation des valeurs locales
    // setSelectedType("");
    setInputTravaux(["", "", "", "", ""]);
    setInputMateriel(["", "", "", "", ""]);
    setInputCoordonnees(["", "", "", "", "", "", "", ""]);
    setTx1("");
    setTx2("");
    setTx3("");
    setTx4("");
    setTx5("");
    setMat1("");
    setMat2("");
    setMat3("");
    setMat4("");
    setMat5("");
    setCoord1("");
    setCoord2("");
    setCoord3("");
    setCoord4("");
    setCoord5("");
    setCoord6("");
    setCoord7("");
    setCoord8("");
    setTemps("");
    setFacture("");
    setMessage("");
    setImageCoord(null);
    setImageMat1(null);
    setImageMat2(null);
    setFileInputKey((prevKey) => prevKey + 1);
  };

  const handleTravaux = (travaux, index) => {
    console.log("handleTravaux :" + index + ": " + travaux);
    const updatedTravaux = [...inputTravaux];
    updatedTravaux[index - 1] = travaux || "";
    setInputTravaux(updatedTravaux);

    // Mise à jour des états individuels
    switch (index) {
      case 1:
        setTx1(travaux || "");
        break;
      case 2:
        setTx2(travaux || "");
        break;
      case 3:
        setTx3(travaux || "");
        break;
      case 4:
        setTx4(travaux || "");
        break;
      case 5:
        setTx5(travaux || "");
        break;
      default:
        break;
    }
  };

  const handleTemps = (temps) => {
    console.log("handleTemps :" + temps);
    setTemps(temps);
  };

  const handleFacture = (tarif) => {
    console.log("handleFacture :" + tarif);
    setFacture(tarif);
  };

  const handleCoordonneesClient = (coordonnees, coordIndex) => {
    console.log("handleCoordonneesClient :" + coordIndex + " : " + coordonnees);
    const updatedCoordonnees = [...inputCoordonnees];
    updatedCoordonnees[coordIndex - 1] = coordonnees || "";
    setInputCoordonnees(updatedCoordonnees);
    // Mise à jour des états individuels
    switch (coordIndex) {
      case 1:
        setCoord1(coordonnees || "");
        break;
      case 2:
        setCoord2(coordonnees || "");
        break;
      case 3:
        setCoord3(coordonnees || "");
        break;
      case 4:
        setCoord4(coordonnees || "");
        break;
      case 5:
        setCoord5(coordonnees || "");
        break;
      case 6:
        setCoord6(coordonnees || "");
        break;
      case 7:
        setCoord7(coordonnees || "");
        break;
      case 8:
        setCoord8(coordonnees || "");
        break;
      default:
        break;
    }
  };

  const handleMateriel = (materiel, number) => {
    console.log("handleMateriel :" + number + " : " + materiel);
    const updatedMateriel = [...inputMateriel];
    updatedMateriel[number - 1] = materiel || "";
    setInputMateriel(updatedMateriel);

    // Mise à jour des états individuels
    switch (number) {
      case 1:
        setMat1(materiel || "");
        break;
      case 2:
        setMat2(materiel || "");
        break;
      case 3:
        setMat3(materiel || "");
        break;
      case 4:
        setMat4(materiel || "");
        break;
      case 5:
        setMat5(materiel || "");
        break;
      default:
        break;
    }
  };

  const handleMessage = (message) => {
    console.log("handleMessage :" + message);
    setMessage(message);
  };

  const handleImageCoordChange = (e) => {
    console.log("handleImageCoordChange :");
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataUrl = event.target.result;

        // Pass the imageDataUrl to WritePdf component
        setImageCoord(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageMat1Change = (e) => {
    console.log("handleImageMat1Change :");
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataUrl = event.target.result;

        // Pass the imageDataUrl to WritePdf component
        setImageMat1(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageMat2Change = (e) => {
    console.log("handleImageMat2Change :");
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataUrl = event.target.result;

        // Pass the imageDataUrl to WritePdf component
        setImageMat2(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  let content = (
    <div className="home">
      <div className="home-title">
        <h1>FICHE SOUS-TRAITANT</h1>
        <button onClick={handleHome}>
          <i className="fa-solid fa-house"></i>
        </button>
      </div>
      <h2>******************************************</h2>
      <div className="home-content">
        <h3>** Travaux à réaliser</h3>
        <h3>*************************************************</h3>
        <div className="travaux">
          <input
            type="text"
            name="tx"
            id="tx1"
            maxLength={50}
            value={tx1}
            placeholder="Entrez les travaux"
            onChange={(e) => {
              handleTravaux(e.target.value, 1);
            }}
          />
          <input
            type="text"
            name="tx"
            id="tx2"
            maxLength={50}
            value={tx2}
            placeholder="Entrez les travaux"
            onChange={(e) => {
              handleTravaux(e.target.value, 2);
            }}
          />
          <input
            type="text"
            name="tx"
            id="tx3"
            maxLength={50}
            value={tx3}
            placeholder="Entrez les travaux"
            onChange={(e) => {
              handleTravaux(e.target.value, 3);
            }}
          />
          <input
            type="text"
            name="tx"
            id="tx4"
            maxLength={50}
            value={tx4}
            placeholder="Entrez les travaux"
            onChange={(e) => {
              handleTravaux(e.target.value, 4);
            }}
          />
          <input
            type="text"
            name="tx"
            id="tx5"
            maxLength={50}
            value={tx5}
            placeholder="Entrez les travaux"
            onChange={(e) => {
              handleTravaux(e.target.value, 5);
            }}
          />
        </div>

        <div className="temps-remuneration">
          <h3>** Temps et rémunération</h3>
          <h3>**********************************</h3>
          <h4>Temps estimé</h4>
          <input
            type="text"
            name="tps"
            id="tps"
            placeholder="Temps Estimé"
            value={temps}
            onChange={(e) => {
              handleTemps(e.target.value);
            }}
          />
          <h4>Montant à nous facturer (autoliquidation) en €</h4>
          <input
            type="number"
            name="mtt"
            id="mtt"
            placeholder="Montant à nous facturer"
            value={facture}
            onChange={(e) => {
              handleFacture(e.target.value);
            }}
          />
          <h3>Facturer en autoliquidation : {facture} € HT</h3>
          <p>Expertise Plomberie SAS</p>
          <p>22 rue de Chavril</p>
          <p>69110 Ste Foy Les Lyon</p>
          <p>TVA intracommunautaire : FR44887709996</p>
        </div>

        <div className="coordonnees-client">
          <h3>** Coordonnées du client</h3>
          <h3>**********************************</h3>

          <div className="image">
            <label htmlFor="imagecoord">Sélectionnez une image :</label>
            <input
              key={fileInputKey}
              type="file"
              id="imagecoord"
              accept="image/*"
              onChange={handleImageCoordChange}
            />
            {imageCoord && (
              <div>
                <h3>Aperçu de l'image :</h3>
                <img
                  src={imageCoord}
                  alt="Selected"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            )}
          </div>
          <h3>ou</h3>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((coordIndex) => (
            <div key={coordIndex}>
              <input
                type="text"
                name={`coord${coordIndex}`}
                id={`coord${coordIndex}`}
                value={inputCoordonnees[coordIndex - 1]}
                placeholder="Entrez les coordonnées"
                onChange={(e) => {
                  handleCoordonneesClient(e.target.value, coordIndex);
                }}
              />
            </div>
          ))}
          <h4>Message :</h4>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Message?"
            value={message}
            onChange={(e) => {
              handleMessage(e.target.value);
            }}
          />
        </div>
        <h3>** Matériel à installer</h3>
        <h3>**********************************</h3>
        <div className="materiel">
          <input
            type="text"
            name="mat"
            id="mat1"
            maxLength={50}
            placeholder="Matériel 1"
            value={mat1}
            onChange={(e) => {
              handleMateriel(e.target.value, 1);
            }}
          />

          <input
            type="text"
            name="mat"
            id="mat2"
            maxLength={50}
            placeholder="Matériel 2"
            value={mat2}
            onChange={(e) => {
              handleMateriel(e.target.value, 2);
            }}
          />

          <input
            type="text"
            name="mat"
            id="mat3"
            maxLength={50}
            placeholder="Matériel 3"
            value={mat3}
            onChange={(e) => {
              handleMateriel(e.target.value, 3);
            }}
          />

          <input
            type="text"
            name="mat"
            id="mat4"
            maxLength={50}
            placeholder="Matériel 4"
            value={mat4}
            onChange={(e) => {
              handleMateriel(e.target.value, 4);
            }}
          />

          <input
            type="text"
            name="mat"
            id="mat5"
            maxLength={50}
            placeholder="Matériel 5"
            value={mat5}
            onChange={(e) => {
              handleMateriel(e.target.value, 5);
            }}
          />
          <div className="image">
            <label htmlFor="imageMat1">Sélectionnez une image :</label>
            <input
              key={fileInputKey}
              type="file"
              id="imageMat1"
              accept="image/*"
              onChange={handleImageMat1Change}
            />
            {imageMat1 && (
              <div>
                <h3>Aperçu de l'image :</h3>
                <img
                  src={imageMat1}
                  alt="Selected"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            )}
          </div>
          <div className="image">
            <label htmlFor="imageMat2">Sélectionnez une image :</label>
            <input
              key={fileInputKey}
              type="file"
              id="imageMat2"
              accept="image/*"
              onChange={handleImageMat2Change}
            />
            {imageMat2 && (
              <div>
                <h3>Aperçu de l'image :</h3>
                <img
                  src={imageMat2}
                  alt="Selected"
                  style={{ maxWidth: "50%" }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="messagesFin">
          <h3>
            IMPORTANT - Vidéo de fin de chantier avant de quitter les lieux
          </h3>
          <p>
            Merci de bien vouloir effectuer une vidéo de fin de chantier : vue
            de l'ensemble, vues détaillées et test du matériel installé.
          </p>
          <h4>A envoyer par Whatsapp® sur le groupe Whatsapp AKF & blicko</h4>
          <h4>
            Vous pouvez consulter un exemple de vidéo de fin de chantier en
            suivant le lien suivant :
          </h4>
          <a href="https://u.pcloud.link/publink/show?code=kZpSrLVZBku2a9iwhFpYz8uVxH9f0zitmtCy">
            https://u.pcloud.link/publink/show?code=kZpSrLVZBku2a9iwhFpYz8uVxH9f0zitmtCy
          </a>
        </div>
      </div>
      <div className="home-generate-doc">
        <WritePdf
          inputTravaux={inputTravaux}
          facture={facture}
          inputMateriel={inputMateriel}
          temps={temps}
          inputCoordonnees={inputCoordonnees}
          message={message}
          imageCoord={imageCoord}
          imageMat1={imageMat1}
          imageMat2={imageMat2}
          // messageGenerate={messageGenerate}
          // setMessageGenerate={setMessageGenerate}
        />
      </div>
    </div>
  );

  return content;
};

export default Home;
