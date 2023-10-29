import {FC, useState} from "react";
import {Card} from "../../components/card/Card";
import {Pagination} from "../../components/pagination/Pagination";
import {useQuery} from "@apollo/client";
import {GET_ALL_CHARACTERS} from "../../graphql/queries/queries";
import styles from './Characters.module.scss';

export const Characters: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { loading, data, error } = useQuery(GET_ALL_CHARACTERS, { variables: { page: currentPage} });

    if (loading) return <div className="text-center">Loading</div>;
    if (error) return <div className="text-center text-danger">Error: {error.message}</div>;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return <>
        <header className="mb-5">
            <h1 className="text-center">Rick & Morty Wiki</h1>
        </header>
        <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 row-cols-sm-2">
            {data?.characters?.results && data?.characters?.results.map((result) => {
                return <Card
                    className="col"
                    key={result.id}
                    body={
                        <div>
                            <div className="position-relative">
                                <img className="d-block w-100 mh-100" src={result.image} alt={'character'}/>
                                <span
                                    className={`position-absolute top-0 end-0 p-1 m-2 text-white rounded ${styles[result.status.toLowerCase()]}`}>{result.status}</span>
                            </div>
                            <h5 className="card-title mt-2">{result.name}</h5>
                            <div className="card-text d-flex flex-column">
                                <div><span className="text-muted">Species: </span>
                                    {result.species}</div>
                                <div><span className="text-muted">Last known location: </span>
                                    {result.location.name}</div>
                            </div>
                        </div>
                    }
                />
            })}
        </div>
        <Pagination currentPage={currentPage} totalPages={data?.characters?.info?.pages} onPageChange={handlePageChange} />
        {/*<style jsx>
            {`
          .test {
          color: blue;
          }
        `}
        </style>*/}
    </>
}