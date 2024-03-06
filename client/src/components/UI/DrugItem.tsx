import Button from "./Button.tsx";

interface DrugItemProps {
    image: string;
    name: string;
    price: number;
    onAdd?: () => void;
}

const DrugItem: React.FC<DrugItemProps> = ({
                                               image,
                                               name,
                                               price,
                                               onAdd}) => {
    return (
        <div className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow gap-3 p-4">
            <div>
                <img className="p-8 rounded-t-lg" src={image} alt="drug image"/>
            </div>
            <div className="flex justify-between">
                <div className="text-xl font-semibold tracking-tight text-gray-900 ">{name}</div>
                <div className="text-3xl font-bold text-gray-900 ">{price}</div>
            </div>
            <div className="">
                <Button
                        outline
                        small
                        label="Add to cart"
                        onClick={() => onAdd}
                />
            </div>
        </div>
    );
}

export default DrugItem;