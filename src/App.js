
import ProgSprache from "./Components/Programmiersprachen/ProgSprache";
import "./Components/Programmiersprachen/ProgSprache.css";

import UeberMich from "./Components/UeberMichKo/UeberMich";
import "./Components/UeberMichKo/UeberMich.css";

import Head from "./Components/Head/Head.js";
import "./Components/Head/Head.css";

import Projekt from "./Components/Projekte/Projekt.js"
import "./Components/Projekte/Projekt.css"

import Kontakte from "./Components/Kontakte/Kontakte.js"
import "./Components/Kontakte/kontakte.css"
import Footer from "./Components/Footer/Footer.js"
import "./Components/Footer/Footer.css"

function App() {
    const name = "Brister Wandji";

    return (
        <main>
            <Head a={name}
                link="public/brister.png" />

            <UeberMich />

            <section className="faehigkeiten">
                <h2 className="skill">Fähigkeiten</h2>

                <div className="progSprache-container">
                    <ProgSprache
                        name="HTML"
                        description="Hypertext Markup Language"
                        link="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"
                    />

                    <ProgSprache
                        name="CSS"
                        description="Cascading Style Sheets"
                        link="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                    />

                    <ProgSprache
                        name="JavaScript"
                        description="Programmiersprache für interaktive Webseiten"
                        link="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    />

                    <ProgSprache
                        name="React"
                        description="JavaScript-Bibliothek für Benutzeroberflächen"
                        link="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    />

                    <ProgSprache
                        name="C++"
                        description="Objektorientierte Programmiersprache"
                        link="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
                    />

                    <ProgSprache
                        name="C"
                        description="Prozedurale Programmiersprache"
                        link="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
                    />
                </div>
            </section>
            <Projekt
                alt="meine WM Seite"
                fotolink="./fifa.png"
                titel="Webseite zu Weltmeisterschaft 2026 Informationen"
                description="Eine moderne Webseite mit Mannschaften, Spielplan, Quiz und wichtigen Informationen zur Fußball-Weltmeisterschaft 2026."
                name1="CSS"
                name2="HTML"
                name3="JAVASCRIPT"
                link="https://wandjimbakuibrister-del.github.io/Projekt_Webentwicklung2026-hsworms/"
            />
            <Projekt
                alt="Mein Porto-Folio"
                fotolink="./porto.png"
                titel="Webseite zu meinem Porto-Folio"
                description="Mein persönliches Portfolio mit Informationen über mich, meine Kenntnisse und meine bisherigen Webprojekte."
                name1="CSS"
                name2="HTML"
                name3="JAVASCRIPT"
                name4="React"
                link="http://192.168.56.1:3000"
            />
            <Kontakte />
            <Footer />
        </main>
    );
}

export default App;