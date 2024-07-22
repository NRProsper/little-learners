
const Card = ({children}) => {
    return (
        <div className="card_shadow p-[80px] border-2 border-gray-15 rounded-[12px]">
            {children}
        </div>
    )
}

export default Card;