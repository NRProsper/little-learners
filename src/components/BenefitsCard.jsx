
const BenefitsCard = ({benefit}) => {
    return (
        <div className="card_shadow relative pt-[80px] pb-[50px] px-[50px] border-2 border-gray-15 rounded-[12px]">
            <div className="icon w-[74px] h-[74px] flex items-center justify-center absolute top-0 left-[30px]  transform  -translate-y-1/2 px-[20px] py-[20px] border-2 border-gray-15 bg-orange-90 rounded-[12px]">
                <span>
                    <img src={benefit.icon} alt={benefit.title}/>
                </span>
            </div>
            <div className="text">
                <h2 className="text-gray-10 text-[20px] font-bold mb-3">{benefit.title}</h2>
                <p className="text-gray-30 text-[20px] font-outfit">{benefit.description}</p>
            </div>
        </div>
    )
}

export default BenefitsCard;