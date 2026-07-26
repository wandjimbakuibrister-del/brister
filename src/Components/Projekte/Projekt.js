function Projekt({ name1, titel,name4, name2, name3, link, description, fotolink, alt, sprachen }) {
    return (
        <a href={link}>
            <section className="box">
                <img alt={alt} src={fotolink} />
                <div id="titelSprache">
                    <h3>{titel}</h3>
                    <p>{description}</p>
                    <div className="sprachen">
                        <h4>{name1}</h4>
                        <h4>{name2}</h4>
                        <h4>{name3}</h4>
                        <h4>{name4}</h4>
                    </div>
                </div>
            </section>
        </a>
    )
}
export default Projekt;