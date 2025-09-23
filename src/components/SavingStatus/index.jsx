import { IconSavings } from "../icons"
import { ProgressBar } from "../ProgressBar"

export const SavingStatus = () => {
    return (
        <div className="flex flex-col gap-[40px]">
            <p className="text-secondary-income flex items-center gap-[8px] justify-center text-xl leading-[125%]">
                <IconSavings /> Economizar
            </p>
            <ProgressBar percent={40}/>
        </div>
    )
}