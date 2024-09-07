function Tile({ className, value, onClick, playerTurn }) {
    let hoverClass = null;
    if(value == null && playerTurn != null){
        hoverClass = `${playerTurn.toLowerCase()}-hover`;
    }

    return (
        <div onClick={onClick} className={`title ${className} ${hoverClass}`}>
            {value}
        </div>
    );
}

export default Tile;