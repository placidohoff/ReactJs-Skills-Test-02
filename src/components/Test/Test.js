import React, {useState} from 'react'
import Popup from '../Popup/Popup.js'
import { Button } from 'react-bootstrap'

function Test() {
  const [show,setShow] = useState(false)
  const showThis = () => {
    setShow(!show)
  }
  const close = () => {
    setShow(false)
  }
  return (
    <>
    <Button variant="primary" onClick={showThis}>
          Launch demo modal
    </Button>
     <Popup
        show={show}
        close={close}
     />
    </>
  );
}

export default Test