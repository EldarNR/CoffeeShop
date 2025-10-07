// libraries
import {FC} from "react";

export const Detail: FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="flex">
        <span className="text-black flex-1">{label}:</span>
        <span className="flex-1">{value}</span>
    </div>
);