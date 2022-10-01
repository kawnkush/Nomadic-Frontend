import React from "react";

//importing MUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//importing styles
import styles from "./styles.module.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  p: 4,
};

const ModalComponent = (props) => {
  return (
    <>
     <Modal
        open={true}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         {props.children}
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
