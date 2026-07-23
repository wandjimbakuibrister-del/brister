import "./App.js";
import "./App.css";
import ProgSprache from "./Components/ProgSprache";
function UeberMich() {
    return (
        <div className="uebermich">
            <h2>Über mich</h2>
            <p>
                Ich bin ein Student im Fachbereich Angewandte Informatik und angehender Webentwickler.
                Ich habe eine Leidenschaft für das Erstellen von Webseiten und Webanwendungen.
                In meiner Freizeit beschäftige ich mich gerne mit neuen Technologien und Programmiersprachen.
            </p>
        </div>
    )
}

function App({ a }) {
    return (
        <main>
            <header className="foto-name">
                <div id="info">
                    <h1>
                        Hallo,
                        <br />
                        ich bin <span className="name">{a}</span>
                    </h1>

                    <p className="job">
                        Student im Fachbereich Angewandte Informatik
                        <br />
                        und angehender Webentwickler
                    </p>
                </div>
                <img
                    src="/brister.png"
                    alt={a}
                    className="foto"
                />
            </header>
            <UeberMich />
            <div className="progSprache-container">
                <ProgSprache
                    name="HTML"
                    description="Hypertext Markup Language"
                    link="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                />
                <ProgSprache
                    name="CSS"
                    description="Cascading Style Sheets"
                    link="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                />
                <ProgSprache id="javascript"
                    name="JavaScript"
                    description="JavaScript"
                    link="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                />
                <ProgSprache 
                    name="React"
                    description="React"
                    link="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                />
                <ProgSprache 
                    name="C++"
                    description="C++"
                    link="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
                />
                <ProgSprache id="objktiv-c"
                    name="C"
                    description="C"
                    link="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
                />
            </div>

        </main>
    );

}

export default App;


