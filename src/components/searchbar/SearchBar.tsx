import {FC} from "react";
import styles from "./SearchBar.module.scss";

type Props = {
    value: string,
    placeHolder: string,
    className: string,
    onInputChange: () => void,
    clearText: () => void,
}

export const SearchBar: FC = ({value, placeHolder, className, onInputChange, clearText}: Props) => {
    return <div className={className}>
        <div className={styles['search-bar']}>
            <input type="text" aria-label="search"
                   className={`bg-white text-black px-3 rounded ${styles['input-textbox']}`}
                   value={value} placeholder={placeHolder}
                   onChange={onInputChange}/>
            {value && <button className="h-100 text-black" onClick={clearText}>x</button>}
        </div>

    </div>
}