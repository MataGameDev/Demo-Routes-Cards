import React, {useState, useEffect} from 'react';
import Character2 from '../Character2/Character2';
import Pagination from '@mui/material/Pagination';

export default function List2() {
    const [characters, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [pages, setPages] = useState();
    const [page, setPage] = useState(1);


    useEffect(() => {
        const url = currentPageUrl;
        async function fetchData() {
            const data = await fetch(url);
            const {results,info} = await data.json();
            setCharacter(results);
            setLoading(false);
            
            setNextPageUrl(info.next);
            setPrevPageUrl(info.prev);
            setPages(info.pages);
        }
        fetchData();
    }, [currentPageUrl]);

    //Next Page
    const nextPage =() =>{
        setCurrentPageUrl(nextPageUrl);
    }
    //Prev Page
    const prevPage =() =>{
        setCurrentPageUrl(prevPageUrl);
    }
    //Choose Page
    const goToPage = (event,num) =>{
        setPage(num);
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`);

    }

    if(loading)
        return(<div>Loading...</div>)

    return (
        <div>
            <Pagination 
                count={pages} 
                page={page}
                onChange={goToPage}

            />
            <h2>Characters</h2>
            <div className="row">
                {
                characters.map((character) => (
                    <Character2
                        key={character.id}
                        name={character.name}
                        origin={character.origin}
                        image={character.image}
                    />
                ))
                }
            </div>
            <Pagination 
                count={pages} 
                page={page}
                onChange={goToPage}
                />
        </div>
    )
}