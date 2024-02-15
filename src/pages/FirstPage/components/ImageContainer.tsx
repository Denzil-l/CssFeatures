

interface Props {
    path: string
}

export const ImageContainer: React.FC<Props> = ({ path, }) => {
    return (
        <div className="box">
            <img src={path} alt="" />
        </div>
    )
}