import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]); // en este useState vamos a guardar la info de la imagenes que nos trae la API
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }

}
