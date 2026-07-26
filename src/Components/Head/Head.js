function Head({ a,link }) {
    return (
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
                src={link}
                alt={a}
                className="foto"
            />
        </header>
    )
}

export default Head;