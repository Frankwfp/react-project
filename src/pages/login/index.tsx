import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import axios from 'axios'
import { useRequest, useSize } from 'ahooks'
import _ from 'lodash'

const Login = () => {
  // const list = _.countBy([8.8, 6.2, 7.8, 5.2, 6.4, 5.9], Math.floor)
  // console.log(_.forEach, 'login')
  const [val, setVal] = useState(10)
  const loginRef = useRef(null)
  const size = useSize(loginRef)
  const navigate = useNavigate()

  const { data, error, loading } = useRequest(() => axios.get('http://jsonplaceholder.typicode.com/posts'))

  const getStatus = () => {
    if (loading) return <h1>Loading...</h1>
    if (error) return <h2>Error: {error.message}</h2>
    return <>{data?.data.map((item: any) => <h3 key={`list_${item.id}`}>{item.title}</h3>)}</>
  }

  return (
    <div>
      {getStatus()}
      <p ref={loginRef} onClick={() => setVal(100)}>
        login - {val} - {size?.width}px - {size?.height}px
      </p>
      <Button label="submit" onClick={() => navigate('/home/robot', { state: { a: 10, b: 20, c: 'abc' } })}></Button>
    </div>
  )
}

export default Login
