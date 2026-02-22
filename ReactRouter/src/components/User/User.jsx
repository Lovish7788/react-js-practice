import React from 'react'
import { useParams } from 'react-router'

export default function User(){
const {userid}  = useParams()
return(
    <div className='bg-gray-600 text-amber-50 '>User:{userid}</div>
)
}
