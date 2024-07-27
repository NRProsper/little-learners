import SectionTitle from "../components/SectionTitle.jsx";


const SectionWrapper = ({mini, title, description, children}) => {
    return (
        <section className="my-[150px]">
            <div className="container mx-auto px-[24px]">
                <div className="flex items-center justify-center flex-col gap-y-[100px]">
                    <div className="top text-center flex items-center justify-center flex-col">
                        <SectionTitle>
                            <h3>{mini}</h3>
                        </SectionTitle>
                        <h1 className="font-bold text-[58px] my-3">{title}</h1>
                        <p className="font-outfit text-[20px] font-medium text-center" dangerouslySetInnerHTML={{__html: description}} />
                    </div>
                    <div className="bottom w-full">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionWrapper