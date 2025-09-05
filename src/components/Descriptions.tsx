type DescriptionProps = {
    title: string;
    description: string;
    avatar: React.ReactNode;
    color: string;
}

const Descriptions: React.FC<DescriptionProps> = ({ title, description, avatar, color }) => {
    return (
        <div className='flex gap-6 w-[370px]'>
            <div className="w-[60px] h-[60px] flex justify-center items-center rounded-[30px] shrink-0" style={{
                backgroundColor: color
            }}>
                {avatar}
            </div>

            <div>
                <h3 className='text-[19px] text-primary leading-[150%] tracking-[0.5px] font-semibold'>
                    {title}
                </h3>
                <p className='text-[16px] text-secondary leading-[150%] tracking-[0.5px] font-normal'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Descriptions