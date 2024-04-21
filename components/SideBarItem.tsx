import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProbs {
    icon: IconType
    label: string;
    active?: boolean;
    href: string;
}

const SideBarItem: React.FC<SidebarItemProbs> = ({
    icon:Icon,
    label,
    active, 
    href
}) => {
    return (
        <Link
            href={href}
            className={twMerge(`
                hidden
                md:flex
                flex-row
                h-auto
                items-center
                w-full  
                gap-x-4
                text-md
                font-medium
                cursor-pointer
                hover:text-white
                transition
                text-neutral-400
                py-1
            `,
                active&&"text-white"
            )}>
            <Icon size={26} />
            <p className='truncate w-full'>{label}</p>
        </Link>
    );
};

export default SideBarItem;