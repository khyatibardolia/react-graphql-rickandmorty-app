import React from "react";
import {Characters} from "./pages/characters/Characters";

export const App: React.FC = () => {
    return (
        <div className="p-5">
            <header className="mb-5">
                <h1 className="text-center">Rick & Morty Wiki</h1>
            </header>
            <Characters/>
        </div>
    )
}
