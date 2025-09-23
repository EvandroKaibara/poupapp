const Card = ({ children }) => {
    return(
        <div className="bg-neutral-surface rounded-3xl flex flex-col">
            {children}
        </div>
    )
}

export const CardHeader = ({ children }) => {
    return(
        <div className="bg-neutral-header p-[16px] text-center rounded-t-3xl text-neutral-text text-xl leading-[120%] font-bold">
            {children}
        </div>
    )
}

export const CardBody = ({ children }) => {
    return(
        <div className="py-[24px] px-[16px] flex-grow flex flex-col justify-center">
            {children}
        </div>
    )
}

Card.Header = CardHeader
Card.Body = CardBody

export default Card