// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import _ from 'lodash'

const Login = () => {
  // const list = _.countBy([8.8, 6.2, 7.8, 5.2, 6.4, 5.9], Math.floor)
  // console.log(_.forEach, 'login')
  const navigate = useNavigate()
  return (
    <div>
      <p>login</p>
      <Button label="submit" onClick={() => navigate('/home/robot', { state: { a: 10, b: 20, c: 'abc' } })}></Button>
    </div>
  )
}

export default Login
