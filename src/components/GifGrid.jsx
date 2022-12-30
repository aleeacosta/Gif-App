import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category ); // creamos un custom hook para agrupar toda la funcionalidad que trae las imagenes

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className='card-grid'>
                {
                    images.map( ( img ) => (
                        <GifItem 
                            key={ img.id }
                            { ...img } />
                    ))
                }
            </div>
        
        </>
    )
}
