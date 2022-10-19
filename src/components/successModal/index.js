import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

//Images such as failure, success, warning etc.
import images from "./images";

//Navigation
import { useNavigate } from "react-router-dom";


//css
import styles from "./styles.module.css";

const SuccessModal = (props) => {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-dialog"
          aria-describedby="modal-dialog-description"
        >
          <Box className={styles["MuiBox-root"]}>
            <div className={styles["image-section"]}>
              <img src={images.success} alt={"success"} />
            </div>
            <div className={styles["message-section"]}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                align="center"
                className={styles["MuiTypography-root"]}
              >
                Booking Cancelled Successfully !
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                align="center"
                className={styles["MuiTypography-root"]}
              >
                Your payment will be refunded in next 7 days!
              </Typography>
              <div className={styles["button-area"]}>
                <Button className={styles["continue-button"]} onClick={navigate.bind(null, `/dashboard/`)}>
                  Continue to Dashboard
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    );

}



export default SuccessModal;