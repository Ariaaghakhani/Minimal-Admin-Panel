import { redirect } from 'next/navigation'
import React from 'react'


function page() {
  redirect('./dashboard', 'replace')
  return (

    <>
      <h1>Hello next JS</h1>
    </>
  )
}

export default page