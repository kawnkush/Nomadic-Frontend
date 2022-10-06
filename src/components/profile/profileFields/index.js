import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//importing styles
import styles from "./styles.module.css";

//importing Formik
import * as Yup from "yup";
import { Formik } from "formik";

//importing MUI
import Grid from "@mui/material/Grid";

//importing other components
import Loader from "../../common/loader";
import TextFieldComponent from "../../common/textField";
import Button from "./../../common/button";

//importing toastr
import { toast } from "react-toastify";

const ProfileFields = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user._id && user.name && localStorage.getItem("authToken")) {

    }
    else{
      toast.error("Please Login!");
      navigate("/dashboard");
    }
  }, [])

  const user = JSON.parse(localStorage.getItem("user"));
  
  const initialValues = {
    name: user.name ? user.name : "",
    phoneNumber: "",
    email: user.email ? user.email : "",
    address: "",
  };
  const [loading, setLoading] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      {loading && <Loader />}
      <div
      className={styles["profile-container"]}
      >
      <div
      className={styles["profile-title"]}
      >Edit Profile</div>

      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(form) => (
          <form
            onSubmit={form.handleSubmit}
            className={styles["input-container"]}
          >
            <label className={`${styles["input-row"]} ${styles["flex-center"]}`}>
              <Grid container className={styles["item-container"]}>
                <Grid item 
                md={3} 
                xs={12} 
                padding={0}
                className={`${styles["flex-center"]}`}
                >
                  <span className={styles["input-title"]}>Name</span>
                </Grid>
                <Grid item md={9} xs={12} padding={0}>
                  <TextFieldComponent
                    id="profile-name"
                    name="name"
                    placeholder="Name"
                    width={500}
                    type={"text"}
                    className={styles["input-field"]}
                  />
                </Grid>
              </Grid>
            </label>

            <label className={`${styles["input-row"]} ${styles["flex-center"]}`}>
              <Grid container className={styles["item-container"]}>
                <Grid item 
                md={3} 
                xs={12} 
                padding={0}
                className={`${styles["flex-center"]}`}
                >
                  <span className={styles["input-title"]}>Phone Number</span>
                </Grid>
                <Grid item md={9} xs={12} padding={0}>
                  <TextFieldComponent
                    id="profile-phone"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    width={500}
                    type={"text"}
                    className={styles["input-field"]}
                  />
                </Grid>
              </Grid>
            </label>
            <label className={`${styles["input-row"]} ${styles["flex-center"]}`}>
              <Grid container className={styles["item-container"]}>
                <Grid item 
                md={3} 
                xs={12} 
                padding={0}
                className={`${styles["flex-center"]}`}
                >
                  <span className={styles["input-title"]}>Email</span>
                </Grid>
                <Grid item md={9} xs={12} padding={0}>
                  <TextFieldComponent
                    id="profile-email"
                    name="email"
                    placeholder="Email"
                    width={500}
                    type={"text"}
                    className={styles["input-field"]}
                    disabled={true}
                  />
                </Grid>
              </Grid>
            </label>
            <label className={`${styles["input-row"]} ${styles["flex-center"]}`}>
              <Grid container className={styles["item-container"]}>
                <Grid item 
                md={3} 
                xs={12} 
                padding={0}
                className={`${styles["flex-center"]}`}
                >
                  <span className={styles["input-title"]}>Address</span>
                </Grid>
                <Grid item md={9} xs={12} padding={0}>
                  <TextFieldComponent
                    id="profile-address"
                    name="address"
                    placeholder="Address"
                    width={500}
                    type={"text"}
                    className={styles["input-field"]}
                  />
                </Grid>
              </Grid>
            </label>
            <Button
              variant="contained"
              type="submit"
              className={styles["submit-button"]}
            >
              Update
            </Button>
          </form>
        )}
      </Formik>
      </div>
    </>
  );
};

export default ProfileFields;
