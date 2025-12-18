import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router"

const MovieDetails = () => {
    const {id} = useParams()
    const[movie, setMovie] = useState(undefined)
 
    const handleLoad = async () => {
        try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_APIKEY}&i=${id}`)
            const data = await res.json()
            setMovie(data)
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    handleLoad()
    useEffect(() => {

    },[])

    return (
        <>
            {movie && (
                <div className="movie-details">
                    {Object.entries(movie).map(
                        (entry) =>(
                            <div className="entry">
                                <span><b>
                                    {entry[0]}:
                                </b></span>
                                <span>
                                    {JSON.stringify(entry[1])}
                                </span>
                            </div>
                        ))}
                </div>
            )}

        </>
    )
}

export default MovieDetails