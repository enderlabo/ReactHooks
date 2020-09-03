import React from 'react'
import { useFetch } from '../hooks/useFetch/useFetch'
import { useCount } from '../hooks/useCount'


export const MultiplesHooks = () => {

    const { counter, increment }=useCount(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter } `);
    // const state = useFetch('https://superheroapi.com/api/10220501003210111/zoom');
    console.log(data)
    const { author, quote } = (!loading && data.length > 0) && data[0];

    console.log(author + quote);


    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                loading ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                    :
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>

                )
                
            }

            <br />
            <button className="btn btn-primary p-3" onClick={ increment }>Next</button>
            
        </div>
    )
}
