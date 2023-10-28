import React from "react";
import {CharactersList} from "../../components/characters/CharactersList";

export const Characters: React.FC = () => {
    return <>
        <header className="mb-5">
            <h1 className="text-center">Rick & Morty Wiki</h1>
        </header>
        <CharactersList/>
    </>
}