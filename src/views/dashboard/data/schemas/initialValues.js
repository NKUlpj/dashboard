/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import checkout from "./form";

const {
  formField: {
    firstName,
    lastName,
    company,
    email,
    password,
    repeatPassword,
    address1,
    address2,
    city,
    zip,
    twitter,
    facebook,
    instagram,
    publicEmail,
    bio,
  },
} = checkout;

const initialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
  [company.name]: "",
  [email.name]: "",
  [password.name]: "",
  [repeatPassword.name]: "",
  [address1.name]: "",
  [address2.name]: "",
  [city.name]: "",
  [zip.name]: "",
  [twitter.name]: "",
  [facebook.name]: "",
  [instagram.name]: "",
  [publicEmail.name]: "",
  [bio.name]: "",
};

export default initialValues;
