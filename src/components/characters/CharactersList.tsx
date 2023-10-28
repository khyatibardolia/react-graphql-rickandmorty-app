import React from "react";
import {useQuery} from '@apollo/client';
import {getAllCharacters} from "../../graphql/queries/queries";
import {Card} from "../common/card/Card";
import styles from './CharactersList.module.scss';

export const CharactersList: React.FC = () => {
    const {loading, data, error} = useQuery(getAllCharacters)

    if(loading) return <div className="text-center">Loading</div>;
    if(error) return <div className="text-center text-danger">Error: {error.message}</div>;

    return <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2">
            {data?.characters?.results && data?.characters?.results.map((result) => {
                return <Card
                        className="col"
                        key={result.id}
                        body={
                            <div>
                                <div className="position-relative">
                                    <img className="d-block w-100 mh-100" src={result.image} alt={'character'}/>
                                    <span className={`position-absolute top-0 end-0 p-1 m-2 text-white rounded ${styles[result.status.toLowerCase()]}`}>{result.status}</span>
                                </div>
                                <h5 className="card-title mt-2">{result.name}</h5>
                                <p className="card-text d-flex flex-column">
                                    <div><span className="text-muted">Species: </span>
                                        {result.species}</div>
                                    <div><span className="text-muted">Last known location: </span>
                                        {result.location.name}</div>
                                </p>
                            </div>
                        }
                    />
            })}
        </div>
}