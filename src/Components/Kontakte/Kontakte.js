function Kontakte() {
    const emailSenden = (event) => {
        event.preventDefault();

        const formular = new FormData(event.target);

        const name = formular.get("name");
        const email = formular.get("email");
        const nachricht = formular.get("nachricht");

        window.location.href =
            `mailto:deineemail@gmail.com` +
            `?subject=Nachricht von ${encodeURIComponent(name)}` +
            `&body=${encodeURIComponent(
                `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${nachricht}`
            )}`;
    };

    return (
        <div className="kontakte">
            <div className="kontakt-header">
                <h2>Kontakte</h2>

                <img
                    src="https://cdn-icons-png.flaticon.com/512/281/281769.png"
                    alt="Kontakt Icon"
                />
            </div>

            <form className="kontakt-info" onSubmit={emailSenden}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    required
                />

                <textarea
                    name="nachricht"
                    placeholder="Nachricht"
                    required
                />

                <button type="submit">Senden</button>
            </form>
        </div>
    );
}

export default Kontakte;