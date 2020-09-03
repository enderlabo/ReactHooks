import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('COmponent mount') //DidMount
        return () => {
            console.log('Dissmount Component')//Inside Return = Didmount
        }
    }, [])
    return (
        <div>
            <h2>YOu're Amazing!!</h2>
        </div>
    )
}
