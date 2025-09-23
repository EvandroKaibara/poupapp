import { IconSearch } from "../icons"

export const SearchInput = (props) => {
    return(
        <div className="flex items-center bg-neutral-header py-[12px] px-[16px] gap-[16px] rounded-lg">
            <IconSearch />
            <input type="text" className="w-full text-neutral-text text-[20px] leading-[120%]" {...props} />
        </div>
    )
}