export const ProgressBar = ({ percent }) => {
    return(
        <div className="bg-neutral-darker rounded-lg overflow-hidden w-full h-[40px]">
            <div 
                className="
                    bg-primary-highlight
                    h-full
                    flex
                    justify-center
                    items-center
                    text-neutral-darker
                    text-base
                    leading-[120%]
                    transition-all
                    duration-300
                    ease-in-out
                "
                style={{ width: `${percent}%` }}
            >
                {percent}%
            </div>
        </div>
    )
}