import { twMerge } from "tailwind-merge";

interface ChipProbs {
    active?: boolean,
    name: string,
}

const Chip: React.FC<ChipProbs> = ({
    active, name
}) => {
    const className = active ? "bg-white text-black" : "bg-neutral-100/10 hover:bg-neutral-100/20"
    return (
        <span
            className={twMerge(`
                py-1
                px-3
                rounded-full
                cursor-pointer
            `,
                className    
            )}
        >
            {name}
        </span>
    );
};

export default Chip;