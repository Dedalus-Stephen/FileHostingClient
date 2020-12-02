import React from 'react'

import { CircularProgress } from '@material-ui/core'

function Loading() {

    return (
        <>
          <h3 className='container'>Loading...</h3>
          <CircularProgress />
        </>
    )

}

export default Loading
