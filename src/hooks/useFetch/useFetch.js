import { useState, useEffect, useRef } from 'react'

export const useFetch = ( url ) => {

    if( url === ' ' || url === undefined || url === null ){
        throw new Error( 'Url is Required' );
    }
    // const tokenApi = '10220501003210111';
    // const urlApi = `https://superheroapi.com/api${ tokenApi }/zoom`;
    // const urlApi = 'https://www.breakingbadapi.com/api/quotes/1';

    const isMounted = useRef(true); //hold value when component is dismount
    
    useEffect( () => {
        return () => {
            isMounted.current = false; //hold reference.
        }
    }, [])

    const [ state, setState ]= useState({
        data: null,
        loading: true,
        error: null
    });


    useEffect( () => {
        //Using loading when called api or change next page.
        setState({ data:null, loading: true, error: null })

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                //Conditional when component is called many times and prevent error.
                if( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                } else console.log('Component dismount')


            })

    }, [url])

    return state;
}
