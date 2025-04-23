import React from 'react'
const fetchData = async () => {
  await new Promise((resolve,reject) => {
    setTimeout(()=> resolve(),2000)
  })

  return "Fetched data"

}

const Wait = async () => {

  await fetchData()

  return (
    <div>wait</div>
  )
}

export default Wait