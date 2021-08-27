import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider'
import { useHistory } from 'react-router-dom'

function Index() {
    const [{user}, dispatch] = useStateValue()
    const history = useHistory()

    useEffect(() =>{
        if(user.type !== 'user')
            history.push('/login')

    },[])

    return(
        <div class="index">
            Index Page
        </div>
    )
}

export default Index;