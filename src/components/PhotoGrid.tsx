type PhotoGridProps = {
    dogImage: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    reverse?: boolean;
}
const PhotoGrid: React.FC<PhotoGridProps> = ({ dogImage: DogImage, title, description, reverse }) => {
    return (
        <div className={`flex items-center justify-center ${reverse ? "flex-row-reverse" : "flex-row"}`}>
            <DogImage />
            <div className={`flex flex-col gap-4 w-[570px] ${reverse ? "pr-[30px]" : "pl-[30px]"}`}>
                <h2 className="font-semibold text-[40px] leading-[120%] tracking-[0.25px] text-primary">
                    {title}
                </h2>

                <p className="font-normal text-[16px] tracking-[0.5px] leading-[150%] text-secondary">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default PhotoGrid