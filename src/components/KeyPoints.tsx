
type KeyPointsProps = {
    percent: string;
    description: string;
    isLast?: boolean
}

const KeyPoints: React.FC<KeyPointsProps> = ({ percent, description, isLast }) => {
    return (
        <div className="flex gap-12 pb-3 border-b border-[#E3E3E8]">
            <div className="text-[33px] font-bold text-button leading-[150%] tracking-[0.25px]">
                {percent}
            </div>
            <p className="text-[16px] text-secondary leading-[150%] tracking-[0.5px]">
                {description}
            </p>
        </div>

    )
}

export default KeyPoints