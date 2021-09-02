import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

function Popup(props) {
    const [show, setShow] = useState(props.show);
  
    const handleClose = () => props.close();
    const handleShow = () => setShow(true);
  
    return (
      <div
          style={{

              display:'flex',
              alignSelf:'center'
          }}
      >
        
  
        <Modal show={props.show} onHide={handleClose}
            style={{
                display:'flex',
                alignSelf:'center'
            }}
        >
        <Modal.Header closeButton
            style={{
                display:'flex', 
                justifyContent:'flex-end',
                backgroundColor: '#00cc9b'
            
            }}
        >
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>

            <Modal.Body
                style={{
                    display:'flex',
                    alignSelf: 'center',
                    justifyContent:'center'
                }}
            >
              <p style={{
                  color:'black',
                  fontWeight:'bold'
                }}>
                    Coming Soon!
                </p>
              
            </Modal.Body>
            
          
        </Modal>
      </div>
    );
  }

  export default Popup;