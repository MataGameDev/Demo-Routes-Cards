import React, {useState, useEffect} from 'react';
import Character from './Character';
import Pagination from '@mui/material/Pagination';
import './styles.css';

export default function List() {
    const [characters, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);

    const [countPage,setCountPage] = useState(1);

    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [pages, setPages] = useState();


    useEffect(() => {
        const url = currentPageUrl;

        async function fetchData() {
            const data = await fetch(url);
            const {results,info} = await data.json();

            setCharacter(results);
            setLoading(false);
            setPages(info.pages);
        }
        fetchData();
    }, [currentPageUrl]);
    //Choose Page
    const handleChange =(event,value)=>{
        setCountPage(value);
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${value}`);

    }

    if(loading)
        return(<div>Loading...</div>)

    return (
        <div className="List">

            <h2>Characters</h2>
            <Pagination count={pages} page = {countPage} onChange={handleChange} />
            <div className="row">
                {
                characters.map((character) => (
                    <Character
                        key={character.id}
                        name={character.name}
                        origin={character.origin}
                        image={character.image}
                    />
                ))
                }
                
            </div>
            <Pagination count={pages} page = {countPage} onChange={handleChange} />
        </div>
    )
}