import "./App.js";
import "./App.css";
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
        </main>
    );

}

export default App;


