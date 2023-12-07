import React from "react";
import jsPDF from "jspdf";
import blickoLogo from "../components/blickoLogo.jpg";

const WritePdf = ({
  inputTravaux,
  facture,
  inputMateriel,
  temps,
  inputCoordonnees,
  message,
  imageCoord,
  imageMat1,
  imageMat2,
}) => {
  const generatePdf = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(12);

    // Page 1
    // pdf.addPage();
    //************* */
    // LOGO EN-TETE
    // addImage (URL, format, X top-left, Y top-left, width, height)
    //**************** */
    if (blickoLogo) {
      try {
        pdf.addImage(blickoLogo, "JPEG", 70, 20, 64, 25);
      } catch (error) {
        console.error("Error adding blickoLogo:", error);
      }
    } else {
      console.warn("No blickoLogo provided");
    }

    //********************* */
    // Travaux à réaliser
    //********************* */
    pdf.setDrawColor(0); // Set frame color to black
    pdf.setFillColor(255, 255, 255); // Set background color for the frame
    pdf.rect(20, 50, 170, 7, "FD"); // Draw a filled rectangle as the frame
    pdf.setTextColor(0); // Set text color to black
    pdf.setFont("helvetica", "bold"); // Set the font to bold
    pdf.setFontSize(12);
    pdf.text("Travaux à réaliser", 78, 55); // Add the title inside the frame

    // Display each line of inputTravaux
    pdf.setFont("helvetica", "normal"); // Set the font back to normal
    pdf.setFontSize(10); // Set the font size for the lines
    const lineHeight = 6; // Adjust the line height as needed

    for (let i = 0; i < inputTravaux.length; i++) {
      const yPosition = 65 + i * lineHeight; // Adjust the y-position for each line
      pdf.text(inputTravaux[i], 22, yPosition);
    }

    //********************* */
    // Temps et rémunération
    //********************* */
    pdf.setDrawColor(0); // Set frame color to black
    pdf.setFillColor(255, 255, 255); // Set background color for the frame
    pdf.rect(20, 100, 170, 7, "FD"); // Draw a filled rectangle as the frame
    pdf.setTextColor(0); // Set text color to black
    pdf.setFont("helvetica", "bold"); // Set the font to bold
    pdf.setFontSize(12);
    pdf.text("Temps et rémunération", 75, 105); // Add the title inside the frame

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10); // Set the font size for the lines

    pdf.text("Temps estimé", 22, 115);
    pdf.text(temps, 180, 115, { align: "right" });
    pdf.text("Montant à nous facturer (autoliquidation) en €", 22, 121);
    // Concatenate Euro symbol and any additional characters after facture, then align to the right
    const totalFacture = `${facture} €`; // Add Euro symbol
    pdf.text(totalFacture, 180, 121, { align: "right" });

    pdf.setFont("helvetica", "bold");
    pdf.text(`Facturer en autoliquidation : ${facture} € HT`, 22, 133);

    pdf.setFont("helvetica", "normal");
    pdf.text("Expertise Plomberie SAS", 22, 140);
    pdf.text("22 rue de Chavril", 22, 146);
    pdf.text("69110 Ste Foy Les Lyon", 22, 152);
    pdf.text("TVA intracommunautaire : FR44887709996", 22, 158);

    //************************************************************ */
    // Coordonnées du client, si pas d'image, on prend les coordonnées saisies
    //*********************************************************** */
    pdf.setDrawColor(0); // Set frame color to black
    pdf.setFillColor(255, 255, 255); // Set background color for the frame
    pdf.rect(20, 170, 170, 7, "FD"); // Draw a filled rectangle as the frame
    pdf.setTextColor(0); // Set text color to black
    pdf.setFont("helvetica", "bold"); // Set the font to bold
    pdf.setFontSize(12);
    pdf.text("Coordonnées du client", 75, 175); // Add the title inside the frame

    // Display each line of inputCoordonnees
    pdf.setFont("helvetica", "normal"); // Set the font back to normal
    pdf.setFontSize(10); // Set the font size for the lines

    if (imageCoord) {
      try {
        pdf.addImage(imageCoord, "JPEG", 22, 185, 50, 50);
      } catch (error) {
        console.error("Error adding imageCoord:", error);
      }
    } else {
      for (let i = 0; i < inputCoordonnees.length; i++) {
        const yPosition = 185 + i * lineHeight; // Adjust the y-position for each line
        pdf.text(inputCoordonnees[i], 22, yPosition);
      }
    }
    pdf.setFont("helvetica", "bold"); // Set the font to bold
    pdf.setFontSize(12); // Set the font size for the lines
    pdf.text(`${message}`, 22, 260);

    //********************* */
    // Pied de page
    //********************* */
    pdf.setFont("helvetica", "normal"); // Set the font back to normal
    pdf.setFontSize(10); // Set the font size for the lines

    const footerText1 =
      "Expertise Plomberie - SAS au capital de 62 500 euros -";
    const footerText2 = "RCS Lyon 887 709 996";

    // Calculate the width of the text for each line
    const textWidth1 =
      (pdf.getStringUnitWidth(footerText1) * pdf.internal.getFontSize()) /
      pdf.internal.scaleFactor;
    const textWidth2 =
      (pdf.getStringUnitWidth(footerText2) * pdf.internal.getFontSize()) /
      pdf.internal.scaleFactor;

    // Calculate the X coordinate for centering each line
    const centerX1 = (pdf.internal.pageSize.getWidth() - textWidth1) / 2;
    const centerX2 = (pdf.internal.pageSize.getWidth() - textWidth2) / 2;

    pdf.text(footerText1, centerX1, 281);
    pdf.text(footerText2, centerX2, 287);

    // pdf.text("Expertise Plomberie - SAS au capital de 62 500 euros -", 45, 281);
    // pdf.text("RCS Lyon 887 709 996", 80, 287);

    // Page 2
    pdf.addPage();

    //****************************************************** */
    // Matériel à installer, images et texte
    //**********************************************************/
    pdf.setDrawColor(0); // Set frame color to black
    pdf.setFillColor(255, 255, 255); // Set background color for the frame
    pdf.rect(20, 20, 170, 7, "FD"); // Draw a filled rectangle as the frame
    pdf.setTextColor(0); // Set text color to black
    pdf.setFont("helvetica", "bold"); // Set the font to bold
    pdf.setFontSize(12);
    pdf.text("Matériel à installer", 75, 25); // Add the title inside the frame

    if (inputMateriel.length) {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      for (let i = 0; i < inputMateriel.length; i++) {
        const yPosition = 35 + i * lineHeight; // Adjust the y-position for each line
        pdf.text(inputMateriel[i], 23, yPosition);
      }
    }

    if (imageMat1) {
      try {
        pdf.addImage(imageMat1, "JPEG", 23, 65, 150, 50);
      } catch (error) {
        console.error("Error adding imageMat1:", error);
      }
    }

    if (imageMat2) {
      try {
        pdf.addImage(imageMat2, "JPEG", 23, 120, 150, 50);
      } catch (error) {
        console.error("Error adding imageMat2:", error);
      }
    }

    //********************* */
    // Messages de fin
    //********************* */
    pdf.setDrawColor(0); // Set frame color to black
    pdf.setFillColor(255, 255, 255); // Set background color for the frame
    pdf.rect(20, 195, 170, 7, "FD"); // Draw a filled rectangle as the frame
    pdf.setTextColor(0); // Set text color to black
    pdf.setFont("helvetica", "bold"); // Set the font to bold
    pdf.setFontSize(12);
    pdf.text(
      "IMPORTANT - Vidéo de fin de chantier avant de quitter les lieux",
      25,
      200
    ); // Add the title inside the frame

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.text(
      "Merci de bien vouloir effectuer une vidéo de fin de chantier : vue de l’ensemble, vues détaillées et test",
      23,
      210
    );
    pdf.text("du matériel installé.", 23, 216);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text(
      "A envoyer par Whatsapp® sur le groupe Whatsapp AKF & blicko",
      23,
      226
    );

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text(
      "Vous pouvez consulter un exemple de vidéo de fin de chantier en suivant le lien suivant :",
      23,
      236
    );

    // Add a hyperlink
    pdf.setFont("helvetica", "normal");
    // Set the stroke color to blue
    pdf.setDrawColor(44, 117, 255);

    // Set font color to blue
    pdf.setTextColor(44, 117, 255);

    const linkText = "Cliquer sur ce lien";
    const linkURL =
      "https://u.pcloud.link/publink/show?code=kZpSrLVZBku2a9iwhFpYz8uVxH9f0zitmtCy";
    pdf.textWithLink(linkText, 23, 246, { url: linkURL });

    // Manually draw an underline

    const startX = 23;
    const endX = startX + 30;
    const y = 246 + 1;

    pdf.line(startX, y, endX, y);

    // Reset the stroke color to default (black)
    pdf.setDrawColor(0);

    // Reset font color to default (black)
    pdf.setTextColor(0);

    //********************* */
    // Pied de page
    //********************* */
    pdf.setFont("helvetica", "normal"); // Set the font back to normal
    pdf.setFontSize(10); // Set the font size for the lines

    pdf.text(footerText1, centerX1, 281);
    pdf.text(footerText2, centerX2, 287);

    pdf.save("fiche_sous_traitant.pdf");
  };

  return (
    <div className="generate-content">
      <h2>Générer le fichier PDF:</h2>

      <div className="generate-button">
        <button onClick={generatePdf}>Générer PDF</button>
      </div>
    </div>
  );
};

export default WritePdf;
