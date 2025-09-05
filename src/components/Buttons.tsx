
type ButtonsProps = {
    children?: React.ReactNode;
}

const Buttons: React.FC<ButtonsProps> = ({ children }) => {
    return (
        <div className="w-full bg-button rounded-[6px] px-[40px] py-[12px] text-center">{children}</div>
    )
}

export default Buttons