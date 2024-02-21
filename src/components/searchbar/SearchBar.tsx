import {ChangeEvent, FC} from "react";
import styles from "./SearchBar.module.scss";

type Props = {
    value: string,
    placeHolder: string,
    className: string,
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    clearText: () => void,
}

export const SearchBar: FC<Props> = ({value, placeHolder, className, onInputChange, clearText}) => {
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