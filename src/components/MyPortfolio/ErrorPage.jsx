import React from 'react'

function ErrorPage() {
  return (
    <div style={{
        position:'absolute',
        width:'100%',
        minHeight:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
      <h1 style={{
        fontSize:'1rem'
      }}>Sorry, This page temporarily unavailable🔒</h1>
    </div>
  )
}

export default ErrorPage
