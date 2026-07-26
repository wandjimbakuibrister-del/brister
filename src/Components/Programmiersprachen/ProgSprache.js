function ProgSprache({ name, description, link,id }) {
    return (
        <div className="progSprache">

            <img id={id} src={link} alt={description} />
            <h3>{name}</h3>

        </div>
    )
}

export default ProgSprache;