import React from 'react'
import { useLocation } from 'react-router-dom'

function PageNotFound() {
    let location = useLocation()
  return (
    <div>Sorry, the page you are trying to reach {location.pathname} doesn't exist</div>
  )
}

export default PageNotFound