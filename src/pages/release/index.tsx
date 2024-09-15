import { useRef, useState } from 'react'
import { useBoolean, useToggle, useHover, useDebounce, useEventListener } from 'ahooks'

const NotFound = () => {
  const hoverRef = useRef(null)
  const listenerRef = useRef(null)

  const [num, setNum] = useState('10')

  const newNum = useDebounce(num, { wait: 500 })
  const [status, { toggle, setTrue, setFalse }] = useBoolean(false)
  const [val, { toggle: useTog }] = useToggle('new', 'old')
  const hoverStatus = useHover(hoverRef)

  useEventListener(
    'click',
    () => {
      setNum(num + 1)
    },
    { target: listenerRef }
  )

  return (
    <>
      <p>release - {JSON.stringify(status)}</p>
      <div onClick={toggle}>toggle</div>
      <div onClick={setTrue}>setTrue</div>
      <div onClick={setFalse}>setFalse</div>
      <p>release - useToggle - {val}</p>
      <div onClick={useTog}>useToggle</div>
      <p ref={hoverRef}>release - useHover - {hoverStatus ? 'aaa' : 'bbb'}</p>
      <p>release - {num}</p>
      <input value={num} onChange={(ev) => setNum(ev.target.value)} />
      <p ref={listenerRef}>{newNum}</p>
    </>
  )
}

export default NotFound
