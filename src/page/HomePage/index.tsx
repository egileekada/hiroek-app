import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import SecondSection from "../../components/SecondSection";
import ThirdSection from "../../components/ThirdSection";
import ForthSection from "../../components/ForthSection";
import Footer from "../../components/Footer";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function HomePage() {
  const [isShown, setIsShown] = React.useState(false);

  const submitForm = async (
    values: FormValues,
    formik: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    const { firstName, lastName, email } = values;
    try {
      const payload = {
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
        email_address: email,
      };

      await axios.post(
        "/.netlify/functions/priority-access-subscription",
        payload
      );
      alert("Contact details added successfully.");
      formik.resetForm();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div
      style={{
        background:
          "transparent linear-gradient(356deg, #E4ECFE 0%, #FFFFFF 12%, #EAF0FE 47%, #FDFDFE 96%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
      }}
      className=" w-full "
    >
      <Navbar />
      <HeroSection open={setIsShown} />
      <SecondSection />
      <div className=" lg:px-12 ">
        <ThirdSection />
      </div>
      <ForthSection open={setIsShown} />
      <Footer />

      {isShown && (
        <>
          <Formik
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validationSchema={SignupSchema}
            onSubmit={submitForm}
          >
            {(formik) => (
              <Form className=" fixed z-20 inset-0 flex justify-center items-center ">
                <div
                  style={{ boxShadow: "0px 20px 40px #0000001A" }}
                  className=" rounded-[30px] relative bg-white left-auto z-30 flex py-8 w-full lg:w-[80%] px-4 lg:px-8  "
                >
                  <div className=" w-fit hidden lg:flex flex-col items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" w-[100px] lg:w-[300px] "
                      viewBox="0 0 337.153 163.495"
                    >
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          x1="0.5"
                          y1="0.314"
                          x2="0.5"
                          y2="1.333"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stop-color="#8c43fe" />
                          <stop offset="1" stop-color="#130cb7" />
                        </linearGradient>
                        <filter
                          id="Path_29656"
                          x="0"
                          y="0"
                          width="143.15"
                          height="163.495"
                          filterUnits="userSpaceOnUse"
                        >
                          <feOffset dy="2" />
                          <feGaussianBlur stdDeviation="2" result="blur" />
                          <feFlood flood-opacity="0.149" />
                          <feComposite operator="in" in2="blur" />
                          <feComposite in="SourceGraphic" />
                        </filter>
                      </defs>
                      <g
                        id="Group_51"
                        data-name="Group 51"
                        transform="translate(-198 -34)"
                      >
                        <g id="Layer_x0020_1" transform="translate(204 38)">
                          <g id="_1723666756768" transform="translate(0 0)">
                            <g
                              transform="matrix(1, 0, 0, 1, -6, -4)"
                              filter="url(#Path_29656)"
                            >
                              <path
                                id="Path_29656-2"
                                data-name="Path 29656"
                                d="M43.429,26.689c-.5,0-.154-.039-.27-.117,0,0-.193-.195-.231-.195-.154-.156-.308-.234-.385-.39-.039-.9-.231-.585-.694-.975-.116-.117-.231-.312-.385-.468l-.655-.468c-.809-.585-.732-.936-1.31-1.325l-.886-.624c-.308-.273-.385-.546-.694-.858-.27-.234-.539-.39-.848-.7l-1.387-1.131a7.5,7.5,0,0,1-1.156-.78L33.41,17.45a4.1,4.1,0,0,1-.424-.351c-.347-.351-1.349-.819-2.042-1.364l-.231-.195c-1-.819-1-.468-2.081-1.6a7.9,7.9,0,0,0-1.5-.819l-.771-.585c-.039,0-.039-.039-.077-.039a9.348,9.348,0,0,0-1.079-.546l-.193-.195c-1.118-.858-.925-.195-1.734-1.014,0-.039-.039-.039-.039-.078l-.27-.234c-.424-.351-.655-.273-.963-.507-.308-.195-.039-.156-.424-.351-.5-.312-1.272-.468-1.7-.78L19.5,8.6a1.215,1.215,0,0,1-.655-.507l-.617-.468c-.462-.39-.925-.234-1.7-.858l-1.079-.663a3.47,3.47,0,0,0-1.426-.312c-.193-.312.116-.078-.193-.39l-.5-.351c-.154-.117-.231-.234-.424-.39-.308-.312.077-.117-.5-.312A5.51,5.51,0,0,1,10.6,3.728c-.848-.624-.848-.39-1.773-.7-.347-.117-.732-.312-1.156-.468a5.092,5.092,0,0,0-2.5-.663l-.385-.507c0-.039-.039-.039-.039-.078A.038.038,0,0,1,4.7,1.271L3.931,1A.134.134,0,0,0,3.854.96L3.545.882C2.967.765,3.006.57,2.312.57L2-.015c-.732,0-1.541-.039-2,.507C.347.57.116.492.424.687c.5.312.385.468,1.156.507.27.663-.116.351.732.585.462.117.116.039.462.234l.347.156c.578.312.462.117,1.04.273L5.241,2.6l.193.585a3.379,3.379,0,0,1,1.734.507L9.4,4.936a.134.134,0,0,0,.077.039,9.91,9.91,0,0,0,1.426.429c.385.156.848.156,1.272.312.424.195.193.156.5.468l.694.039c.077.195,0,.234.116.429l1.233.936c.347.351.462.273,1.04.507.27.117.539.156.848.273a2.738,2.738,0,0,1,.809.195L18,8.99c.193.195.154.507.347.7.231.195.5.195.732.351l.039.039.077.078a.038.038,0,0,1,.039.039c.308.195.385.156.655.351l.655.39c.27.117.347.351.694.546l.462.234a1.724,1.724,0,0,0,.462.234c.27.117.424.078.655.273.385.273.617.585,1,.819a1.154,1.154,0,0,1,.424.234c.5.39.077.351.886.39.231.741.462.78,1.31,1.092,1.195.429.077.351,1.079.936.385.195.154,0,.347.351.27.429.694.507,1.04.9l2.2,1.793c.462.546,1.118.507,1.541.975.231.273.039.117.347.39.116.078.231.195.347.273.539.351.578.585,1.04.975l2.351,2.183a16.133,16.133,0,0,1,1.618,1.637c.771,1.014.655.507,1.7,1.559.27.273.385.429.617.7l.5.546c0,.039,0,.039.039.078l.694,1.014c.039,0,.039.039.039.078l.154.234a2.122,2.122,0,0,0,.347.273l.963,1.014c.385.546.655.468,1.079,1.131l.462.78c.154.195,0,0,.116.195a.521.521,0,0,1,.116.195c.347.507.347.078.732.585l.771.936c.308.507.385.975,1.079,1.092a1.467,1.467,0,0,0,.385.975.038.038,0,0,0,.039.039l.424.468c0,.039.039.039.039.078l.077.195c.039.117.077.195.116.312a2.84,2.84,0,0,0,.655,1.209l.848,1.17a12.286,12.286,0,0,0,.771,1.91c.039.039.116.195.154.234l.077.156c.039,0,.039.039.077.039.347.507.462.429.694,1.131.462,1.676.732.585,1.118,2.378.077.468.231.507.462.858a.038.038,0,0,1,.039.039l.116.195c.154.312.193.975.462,1.286.462.663-.193-.312.116.195a.038.038,0,0,1,.039.039l.154.39c.077.234.077.429.154.663a3.111,3.111,0,0,0,.154.351c.193.39,0,.273.347.9l.193.312a2.434,2.434,0,0,1,.308.936,8.227,8.227,0,0,1,.424,1.325l.462,1.286a5.784,5.784,0,0,0,.193,1.131l.5,1.209a.857.857,0,0,1,.154.312A12.284,12.284,0,0,0,57.8,59.32l.925,2.885c.077.624.077-.117.154.624a13.348,13.348,0,0,0,.154,1.364c0,.039.039.078.039.117l.154,1.715a7.378,7.378,0,0,0,.27,1.442,11.7,11.7,0,0,1,.116,1.637c0,1.209.385,2.534-.039,3.781-.039,0-.039.039-.039.078l-.077.195a1.441,1.441,0,0,1-.462.9c0,.039-.039.039-.039.078-.925.9-1.04,1.676-2.428,2.3l-.116.234a2.294,2.294,0,0,1-.925,1.6,17.656,17.656,0,0,0-1.31,1.6l-.578.546c-.039,0-.039.039-.077.039l-1.349,1.6c-.308.312-.462.351-.655.78a3.029,3.029,0,0,1-.963,1.52,2.1,2.1,0,0,0-.347.468c-.462.663-.809.585-1.079.936-.039,0-.039.039-.077.039a5.457,5.457,0,0,1-.886,1.17c-.462.273-.578.78-.963,1.17l-.231.156c-.308.312-.385.663-.732.936a5.054,5.054,0,0,0-.462.429L45.626,90a13.358,13.358,0,0,1-1.387,1.91,6.346,6.346,0,0,0-.886,1.131c-.193.39-.039.234-.347.507-.039.078-.116.117-.193.195L42,94.6a.038.038,0,0,1-.039.039l-.809,1.247c-.231.312-.116.156-.27.507l-.617.663c-.925.663-.193.663-1.156,1.793-.347.468-.655.624-.809.9a4.568,4.568,0,0,1-.231.585c-.231.429-.462.429-.694,1.092l-.385.819c-.039,0-.116.078-.116.078l-.886,1.481c-.27.39-.462,1.131-.694,1.364-.385.351-.154-.078-.424.468l-.809,1.52a1.625,1.625,0,0,0-.154.858c-.424.351-.347.234-.578.78a15.1,15.1,0,0,1-.732,1.832c-.039,0-.039.039-.039.078l-.116.156c-.039.039-.039.039-.039.078l-.655,1.092-.039.039c-.347.819-.5,1.676-.771,2.534a9.636,9.636,0,0,1-.308,1.442l-.539,1.6a7.961,7.961,0,0,1-.308,1.637,33.027,33.027,0,0,0-.347,8.772c.116.507.154,1.442.308,1.832l.27.468a4.905,4.905,0,0,0,.5,1.52c.039,0,.039.039.039.078l.154.156c.193.234,0,.117.308.234.617.195.077,0,.385.39.116.156,0,.039.231.195s-.039-.117.231.156c.231.195.116.195.308.468l.462.468c.462.507.077.468.886.78.809.351.154.429,1,.741a1.023,1.023,0,0,1,.539.273c.27.312-.039.234.385.429.5.234,1,.195,1.541.39l1.349.585a8.046,8.046,0,0,0,5.241-.078c.617-.234.424,0,.963-.351.039,0,.077-.078.116-.078s.039-.039.077-.039c1.349-.78.655-.585,1.811-1.248.963-.546.231-.546.848-.858l.347-.156c.039,0,.039-.039.077-.039.617-.39.385-.624,1.272-.78a1.138,1.138,0,0,1,.462-.9,12.614,12.614,0,0,0,1.811-1.949c.617-.585.5-1.209.925-1.637.617-.585.231-.351.5-.858.154-.351.27-.078.385-1.014.231-.117.077-.234.308-.585.27-.429.308-.117.347-.819l.462-.117c.039-.468.154-.39.116-.741a1.949,1.949,0,0,1,.308-1.325l.771-1.17c.193-.624,0-1.209.5-1.637,1.079-.858.732-1.637,1.04-2.69a1.74,1.74,0,0,1,.617-1.092c.424-.273.347-.429.539-.858a7.007,7.007,0,0,0,.347-2.456s-.231.078.231.078c.578-.039.424-.351.617-.741l.385-.9a3.471,3.471,0,0,0,.077-.663c.077-.585.039.117.154-.507a8.076,8.076,0,0,0,.039-1.364c.077.156.193.429.27.156.039,0,.039-.039.039-.078l.578-1.559c.154-.312.039-.78.116-1.131.116-.663.771-.819.886-1.871a10.654,10.654,0,0,1,.385-2.261,1.52,1.52,0,0,1,.154-.195l.039-.039.193-.351a22.92,22.92,0,0,0,.424-4.054c.694-.195.347-.078.539-1.131a7.541,7.541,0,0,0,.154-.819l.193-.39a13.2,13.2,0,0,1,.039-2.144c.039-.234.154-.117.347-.351V91.794c0-1.209.193-.468.231-1.442.308-.078.193-.039.385-.273-.27-.195-.193-.117-.193-.624a5.227,5.227,0,0,1,.27-1.754c.385-1.131-.077.624.116-.312a25.056,25.056,0,0,0,.154-4.834c0-.663-.116-.936-.116-1.52s.116-.858.116-1.559V77.837c-.154.117.116.117.308.117l.039-1.559c.462-.273.27.078.5-.585l2.312-3.119c.231-.195.617-.273.809-.507l1.233-1.637c.116-.195.116-.195.193-.312a.137.137,0,0,0,.039-.078l.385-.624c0-.039,0-.039.039-.078l.077-.156c.116-.195-.077,0,.077-.195l1.58-1.131c.539-.546.771-.39,1.773-.351.116.195,0,.195.116.429.231.507.077.078.27.351l.347.546c.347.468-.039-.234.116.156a34.535,34.535,0,0,1,.039,4.015c.039.7.193,1.131.193,1.949.039,1.014,0,2.573.154,3.548.077.507.039,0,.116.39.077.351,0,.663.077.975.077.663.154,0,.27.741.116.663-.308,3.314.54,3.7v-.858a12.368,12.368,0,0,0,.154,1.754.869.869,0,0,0,.308.546l.5,1.637a17.106,17.106,0,0,1,.308,2.456A.134.134,0,0,1,78.3,90l.154.078c.116.078.039,0,.193.078v.936c.617.234-.077-.117.27,0a9.992,9.992,0,0,0,.116,1.17c.193.78.231.351.308.351a2.923,2.923,0,0,0,.039.819l.193.507a9.465,9.465,0,0,1,.193,1.248,9.493,9.493,0,0,0,.694,2.339l.116-.468a6.418,6.418,0,0,1,.27,1.092c.154.819,0,.351.385.819.578.663.347,1.17.655,1.793a18.879,18.879,0,0,0,1.272,1.793.52.52,0,0,1,.116.195,2.041,2.041,0,0,1,.231,1.286c.039,0,.077,0,.077.039l.732,1.325c.27.429.193,1.17.539,1.481.424.39.732.507.925,1.131.231.741.5.7.578,1.481a6.393,6.393,0,0,1,.886.468c0,.507-.039.468.154.819.116.312,0,.156.193.351l1.079,1.793.077.078a3.831,3.831,0,0,1,.5.858c.193.312.27.273.5.507.27.273.385.663.655.975.539.624.578,1.209.963,1.6l.694.663a2.215,2.215,0,0,0,.308.507l.462.117c.077.9.193.312.5.819.27.39.077.585.539.858.732.39.27-.117.578.7.193.546.424.156.925.936a4.717,4.717,0,0,0,.424.9c.27.39.424.234.655.7.193.351-.154.039.231.351.27.273-.27-.234.154.117l.424.507c.154-.234.077-.195.116-.507l.462.585c.193.195.231.156.347.507.039.078.039.156.077.234.077.234-.039.195.231.312l.154.078.27.117a.038.038,0,0,0,.039.039l.385.546c.154.39.231.39.694.429l.154.468a1.588,1.588,0,0,0,.54.585l.462.663c.231.273,0,.039.308.195.539.312.231.507.809.858l.231.156a.038.038,0,0,1,.039.039c.231.234.308.507.655.7.771,3.47,22.466,18.635,26.743,20.818a3.885,3.885,0,0,0,1.156.546c.039-1.131.077-1.4-.925-1.793-3.044-1.247-26.32-19.063-27.745-22.3-.347-.78-.424-.468-.771-1.053l-.116-.195c-.193-.273-.424-.351-.655-.585-.039,0-.077-.078-.116-.078l-1.541-1.91c-.039-.039-.193-.234-.193-.234l-.385-.507c-.5-.468-.27-.78-.655-1.209l-.385-.312c-.809-.624-.655-1.014-1.04-1.442l-.578-.546a5.962,5.962,0,0,1-.732-1.209,1.065,1.065,0,0,0-.154-.195,2.425,2.425,0,0,0-.539-.741l-1.387-1.793c-.193-.273-.116-.546-.539-1.092l-.655-1.014c-.116-.234-.077-.117-.231-.351-.27-.39-.385-.819-.694-1.248l-.424-.585c-.308-.312-.193-.819-.771-1.6l-.231-.273c-.809-1.248.039-.546-.848-1.014l-.424-1.637c-.231-.585-.231-.468-.578-.819l-.231-.273c-.154.195-.077.312-.385.312a9.681,9.681,0,0,1-.231-1.4,1.33,1.33,0,0,0-.116-.312l-.308-.936c-.54-1.287-.193-.312-.617-1.092a11.226,11.226,0,0,1-.385-1.793,8.626,8.626,0,0,1-.655-2.222,2.873,2.873,0,0,0-.694-1.364.678.678,0,0,0-.193-.156l-.385-.195a6.339,6.339,0,0,0-.077-1.715c0-.039-.039-.039-.039-.078l-.385-1.248c-.154-.39-.154-1.053-.27-1.481a3.606,3.606,0,0,1-.231-1.52,2.322,2.322,0,0,0-.347-1.442l-.617-4.522H81.5c-.077-1.364-.385-3.2-.347-4.639,0-.273.077-.78-.039-.936,0-.039-.077-.078-.077-.117-.424-.663-.385-7.563-.154-9.4.077-.663.077-.039.154-.624.154-1.209-.077-5.3.462-6.783l.27-1.248A5.642,5.642,0,0,1,82,59.125c.116-.312.116.156.193-.585a2.519,2.519,0,0,1,.424-1.209c.154-.351.077-.273.308-.546l.039-.039,1.04-1.209A4.118,4.118,0,0,1,84.7,54.6l1.079-1.014c.424-.312.308-.156.5-.39a9.946,9.946,0,0,1,.617-1.092c.539-.585.231.078,1.156-1.325a26.8,26.8,0,0,0,1.773-2.222c0-.039,0-.039.039-.078l.732-.78c.694-.507.732-.429,1.118-1.209a5.688,5.688,0,0,1,.848-.819.038.038,0,0,1,.039-.039l1.272-1.4c.154-.234.154-.7.27-.936l1.233-1.17a.991.991,0,0,0,.347-.429c.154-.195.231-.312.347-.468a7.6,7.6,0,0,1,1.272-1.481,1.031,1.031,0,0,0,.193-.234c.154-.156.154-.234.27-.507a2.094,2.094,0,0,1,.539-.624c.231-.234,0,.117.193-.234.732-1.248.848-.819,1.04-1.364l1.387-1.832c.462-.273.694-.975,1.079-1.364.385-.351.655-.936,1.04-1.325a.683.683,0,0,0,.154-.195l.154-.273c.347-.585.617-.741.963-1.4.116-.195.193-.312.308-.507l1.118-1.754a1.459,1.459,0,0,1,.539-.624l.347-.429c.231-.273.193-.117.308-.468.231-.585.617-.975.809-1.559a.627.627,0,0,1,.116-.312l.347-.39c.539-.39-.424.234.154-.078.347-.156.154,0,.347-.585l.27-.546c.231-.351.27-.9.462-1.248l.385-.819.116-.273.539-1.131.039-.039c.308-.507.655-.546.886-1.092l.347-1.481c.077-.351.039-.156.116-.312l.116-.156a4.005,4.005,0,0,0,.462-1.6.719.719,0,0,0,.308-.078c.578-.351.539-1.715.886-2.3.231-.468,0,.234.231-.507l.193-.507c.039-.156.039-.273.077-.507.116-.819.308-1.676.385-2.456a18.182,18.182,0,0,0-.231-5.224c-.231-.741-.539-.507-.886-1.209-.077-.156-.039-.039-.116-.195l-.116-.195c-.539-.858-.771-.741-1.426-1.325-.732-.624-2.813-.39-3.7-.273-.347.039-.27,0-.539.156-.308.234,0,.156-.462.234a1.846,1.846,0,0,0-.963.546l-.385.273c-.27.195-.347.468-.732.585a2.372,2.372,0,0,0-.925.507.981.981,0,0,0-.385.312L102.735,4c-.578.468-1.079.468-1.773,1.481l-.732.936A8.142,8.142,0,0,0,98.689,7.9l-.462.585c-.231.312-.193.468-.385.7-.347.507-.462.429-.5,1.17a3.822,3.822,0,0,0-1.541,1.4l-.193.312a1.616,1.616,0,0,0-.116.312c-.424,1.131-.694,1.053-1.31,1.676L92.986,15.7a10.092,10.092,0,0,1-.694,1.248l-.424.585c-.308.429-.347,1.053-.578,1.4-.27.468-.116.078-.5.39-.039,1.248,0,.156-.347,1.014a1.673,1.673,0,0,1-.424.819c-.347.429-.193.663-.655,1.17-.424.429-.347.429-.385,1.209-.462.234-.231-.039-.5.468l-1.85,3.236-.077.156a2.91,2.91,0,0,0-.578,1.4c-.077.624-.308.7-.655,1.17-.116.195-.154.351-.308.585l-.077.195-.116.117c0,.039,0,.039-.039.078a.121.121,0,0,1-.039.078,6.852,6.852,0,0,1-.771,1.364l-.231.195c-.5.468-.424,1.481-.732,2.105,0,.039,0,.039-.039.078-.694,1.209-.077.078-.462,1.053l-.886,1.871c-.193.351-.077.7-.385,1.248-.578.936-.462,2.261-.963,3.236-.655,1.209-.231,1.286-.424,1.871-.154.234-.193.195-.27.312l-.193.312c-.27.468-.116.156-.193.819-.077.78-.116.312-.347.78a11.2,11.2,0,0,0-.539,2.612A13.338,13.338,0,0,0,78,50.743l-.385.195a12.542,12.542,0,0,1-.154,1.325,6.717,6.717,0,0,1-.347,1.676,2.551,2.551,0,0,1-.385.975l-.154.273c-.077.117-.077.156-.116.195a2.54,2.54,0,0,1-.617.819c-.347.234-.154-.039-.424.273-.116.156-.077.234-.231.39-.27.39-.424.312-.732.7l-.385.624a.121.121,0,0,1-.039.078l-.424.663-.077.078a.038.038,0,0,1-.039.039l-.925.7c-.308.195-.308.663-.5.936a2.674,2.674,0,0,1-.848.9l-.578.468c-.385.273.039.039-.424.273-.578.273-.5.663-.925,1.092l-1.58,1.91c-.462.468-.308.78-1.233.78a2.978,2.978,0,0,1-1.195-.117c-.539-.156-.231-.039-.424-.273-.771-.975-.385-1.871-.694-2.768l-.231-.468a5.559,5.559,0,0,0-.231-.858c-.116-.195-.347-.273-.462-.507-.193-.429.039-1.131-.193-1.6-.193-.351-.231-.117-.347-.624a22.061,22.061,0,0,0-.462-2.3c-.27-.741-.385-2.027-.963-2.573l-.385-.195a2.754,2.754,0,0,0-.308-1.442l-.231-.273c-.308-.351-.193-.858-.578-1.286l-.231-.156c-.154-.117,0-.117-.308-.234a3.27,3.27,0,0,0-.5-1.832l-.308-.585c-.193-.429-.193-.156-.385-.546-.539-1.209-.655-.468-.809-1.988-.154-1.481-1.156-1.17-1.541-2.222a1.217,1.217,0,0,0-.077-.312l-.27-.78c-.116-.312-.347-.429-.617-.624-.424-.312-.347-.429-.424-1.014-.116-.585,0-.234-.193-.468l-.732-1.014c-.116-.117-.039,0-.154-.156-.385-.507-.116-.741-.694-1.364l-.694-.585c-.732-.468-.539-.9-1.079-1.637a9.4,9.4,0,0,0-1.387-1.637c-.308-.273-.462-.624-.694-.858l-.539-.507c-.193-.234,0-.195-.347-.468a8.5,8.5,0,0,1-.771-.858l-1.079-1.17c-.27-.234-.308-.546-.655-.9a.038.038,0,0,0-.039-.039l-.694-.546c-.385-.234-.539-.663-.809-.936l-.27-.507C43.391,26.728,43.429,26.884,43.429,26.689Zm22.042-3.9L65.394,23.8c-.655.39-.578.117-.771,1.014-.077.39.077.078-.231.351-.539.507-.27,1.248-.578,1.91-.039.039-.039.039-.039.078-.039,0-.077.078-.077.117a2.622,2.622,0,0,1-.617.507l-.539.663c-.347.546-.347,7.212-.231,8.109.039.468.077,1.053.116,1.637.077.936.154.78,1,.858a2.878,2.878,0,0,0,.308.975c.154.312.385.429.617.741a2.153,2.153,0,0,0,1.811.936c.27.507-.116-.117,0,.273a4.931,4.931,0,0,0,2.5-.156l2.042-1.364c.539-.429.771-1.131,1.272-1.715.347-.39.231-.819.578-1.248l.655-1.014c.154-.546.193-1.209.462-1.988l.5-1.637c.154.156.116-.234.154.351a23.831,23.831,0,0,0,.193-5.068c-.039,0,.154-.312,0,.078l-.077.156a.137.137,0,0,1-.039.078c-.039-.312-.039-.117-.077-.351l-.27-1.053c-.039-.039-.039-.039-.039-.078l-.154-.975c-.077-.351,0-.156-.116-.39l-.385-.741c0-.039,0-.039-.039-.078,0-.039,0-.039-.039-.078l-.231-.468c-.308-.468-.27-1.17-.617-1.52-.347-.312-.385-.273-.886-.351-.617-.078-.231-.156-.809-.234-.5-.078-1.464-.078-1.927-.117a4.839,4.839,0,0,0-3.006.624l-.154.078h-.077Zm-14.759,71.3c-.116-.7.848-1.131,1.118-1.676.308-.585.077-.39.539-.7.27-.156.116-.195.424-.429.385-.273.193.273.809-.507l.039-.039c.462-.585.617-1.559,1.387-2.027.617-.39.347-.351.694-.819l.154-.156a.038.038,0,0,0,.039-.039c.039,0,.039-.039.077-.039a8.525,8.525,0,0,1,1-1.053l.694-.624c.154-.117.308-.429,1.272-.234.231.039.116.039.27.117a2.15,2.15,0,0,1,.5,2.534,13.441,13.441,0,0,0-.424,2.807l-.231,1.014a2.742,2.742,0,0,1-.193,1.248c-.539.858-.424,2.417-.617,3.47-.077.39-.231.039-.424.507l-.193,1.131c-.27.858-.154,1.91-.578,3.236a2.033,2.033,0,0,0-.077.429l-.154.351c0,.039-.039.039-.039.078a3.344,3.344,0,0,0-.5,1.209V104l-1.079,3.2a4.777,4.777,0,0,0-.347,1.676c-.193.117-.154.039-.347.234a.038.038,0,0,0-.039.039l-.462.741c-.462,1.092-.039,1.17,0,1.559.077.663-.154-.195-.116.507s.039-.156.231.39c-.462.7,0,.624-.771,1.209-.27.234-.231.468-.385.78l-.039.156a2.18,2.18,0,0,1-.5.312v.546c-.077.624-.039.195-.193.39a5.163,5.163,0,0,0-.385,1.247l-.116.234c-.039.039-.039.117-.077.195l-.077.234c-.27.7-.655,1.17-.925,1.832-.077.195,0,0-.116.195a2.365,2.365,0,0,0-.347.858.137.137,0,0,1-.039.078l-.116.312c-.077.195.039,0-.116.195l-.154.195-.077.078-.732.975c-.231.351-.308.858-.539,1.209-.154.312-.193.507-.5.7-.617.429-.116.7-.963,1.52-.347.312-.039,0-.231.39-.27.507-.385.234-.578.585-.308.156-.347.546-.539.663-.039.039-.039.039-.077.039l-1.541,2.105c-.039,0-.039.039-.077.039-.039.156-.116.351-.154.468-.193.39-.231.117-.694.585l-1.04,1.053-.039.039a1.613,1.613,0,0,0-.385.819,2.145,2.145,0,0,0-1.04.468l-1.233.858c-.385.273.27-.039-.231.117a2.7,2.7,0,0,1-1.04.351c-.5-.039-.963-.273-1.464-.351a.9.9,0,0,0-.231-.585c-.925-1.248-.462-2.261-.848-3.548a4.509,4.509,0,0,1-.116-1.637c0-.975.539-5.848.694-6.316a7.982,7.982,0,0,0,.5-2.105c.116-.546.116-.312.231-.663a14.566,14.566,0,0,1,.848-2.768l.27-.546a1.492,1.492,0,0,0,.231-.7,7.687,7.687,0,0,1,.771-2.183c.193-.39.039-.039.193-.312.5-.7.424-1.559,1-2.105l.039-.039.154-.234c.424-.819.809-1.248,1.5-2.5l1.31-2.144c.039-.039.039-.039.039-.078l1.118-1.715c.039-.039.193-.234.193-.234a5.105,5.105,0,0,0,.617-1.209,1.7,1.7,0,0,0,.154-.273l.308-.624c.154-.39.385-.273.848-.9a1.225,1.225,0,0,1,.231-.195l.5-.819c.231-.546.193-.78.655-1.17l.771-.975c.308-.7.27-.546.809-.975A9.149,9.149,0,0,0,50.6,94.6,1.953,1.953,0,0,0,50.712,94.094ZM88.9,38.619c1.657,0,1.272.078,1.464-.312.154-.351.308-.429.617-.663.963-.624.771-1.17,1.5-1.676l.154-.156c.154-.156,0-.039.116-.117a.121.121,0,0,1,.039-.078l.771-1.053c0-.039.077-.078.077-.117l.732-.819a.137.137,0,0,0,.039-.078,3.935,3.935,0,0,1,.578-.819,4.839,4.839,0,0,0,.655-.9l.039-.039a.562.562,0,0,0,.077-.117l.462-.39c.27-.273.308-.741.578-1.053,0,0,.077-.078.116-.078a130.39,130.39,0,0,0,.077-.078c.039-.039.077-.039.077-.078.424-.312.462-.78.694-.936.27-.195.116-.039.347-.156l.385-.351c.193-.156.347-.195.5-.39l.809-1.559.039-.039c.462-.624.732-.468.848-.975a5.526,5.526,0,0,1,.347-1.209.544.544,0,0,1,.154-.156l.193-.312c.308-.351.347-.234.539-.78.154-.39.308-.429.539-.7l.116-.117a4.925,4.925,0,0,0,.347-.975c.154-.429.231-.312.54-.585a3.905,3.905,0,0,0,.655-1.092c.154-.351.193-.546.578-.663a1.315,1.315,0,0,1,.116-.585c.347-.546,0,.078.27-.156l.5-1.209.039-.117c.077-.078.077-.117.154-.195l.732-.819a6.138,6.138,0,0,1,.347-2.3l.655-1.637a6.019,6.019,0,0,0,.154-2.027c-.039-.624.039-.351-.27-.624l-.231-.195c-.963-.624-1.195.234-1.5.468l-.347.195-.039.039-.347.273c0,.039-.077.078-.116.117-.424.312-.347.507-.694.936l-.385.429c-.848,1.014-1.079.819-1.464,1.715a2.005,2.005,0,0,1-.385.819l-.886.858-.116.117-.308.507-.039.039c0,.039-.039.039-.039.078l-.039.039-1.773,2.612c-.694,1.17-1,.819-1.811,2.417-.655,1.4.077.351-.809,1.4-.308.312-.308.936-.539,1.364l-.154.195c0,.039-.039.039-.039.078-.694.624-.27.507-.617,1.17l-.077.117a.038.038,0,0,1-.039.039c-.27.39-.424.312-.655.78-.308.741-.462.507-.963,1.715a4.649,4.649,0,0,0-.308.624c-.5,1.6-.077.429-.771,1.325l-.462.9a1.766,1.766,0,0,1-.424.9l-.5.819-.27,1.52a.568.568,0,0,1-.077.273l-.077.117c-1.272,1.559-.617,1.364-1.04,2.807C88.824,37.8,88.824,36.942,88.9,38.619Z"
                                transform="translate(6 4.02)"
                                fill-rule="evenodd"
                                fill="url(#linear-gradient)"
                              />
                            </g>
                          </g>
                        </g>
                        <text
                          id="iroek"
                          transform="translate(312.153 142.539)"
                          fill="#7639f1"
                          font-size="89"
                          font-family="Poppins-MediumItalic, Poppins"
                          font-weight="500"
                          font-style="italic"
                          letter-spacing="0.01em"
                        >
                          <tspan x="0" y="0">
                            iroek
                          </tspan>
                        </text>
                      </g>
                    </svg>
                    <p className=" font-semibold text-[#0B0D39] mt-2 text-2xl ">
                      Stay <span className=" text-[#8C43FE]">Connected</span>,
                      <br /> Be{" "}
                      <span className=" text-[#8C43FE]">Inspired</span>,<br />{" "}
                      Be <span className=" text-[#8C43FE]">Empowered</span>.
                    </p>
                  </div>
                  <div className=" w-full lg:w-fit flex flex-col items-center lg:pl-7 lg:ml-auto ">
                    <p className=" font-semibold text-center text-[#0B0D39] text-2xl lg:text-4xl ">
                      Get <span className=" text-[#8C43FE]">Priority</span>{" "}
                      Access!
                    </p>
                    <p className=" font-semibold text-[#0B0D39] mt-2 text-lg text-center lg:text-2xl">
                      Be The First To Know When Hiroek Goes Live
                    </p>

                    <div className=" w-full flex flex-col items-center px-0 lg:px-8 mt-6 ">
                      <Field
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        className=" w-full lg:w-[90%] font-medium border text-sm outline-none border-[#0B0D39] text-center h-[45px] rounded-[43px] rounded-bl-[12px] "
                      />
                      <ErrorMessage
                        component="div"
                        className="text-red-700"
                        name="firstName"
                      />
                      <Field
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        className=" w-full lg:w-[90%] font-medium border text-sm outline-none mt-4 border-[#0B0D39] text-center h-[45px] rounded-[43px] rounded-bl-[12px] "
                      />
                      <ErrorMessage
                        component="div"
                        className="text-red-700"
                        name="lastName"
                      />
                      <Field
                        id="email"
                        name="email"
                        placeholder="Email"
                        className=" w-full lg:w-[90%] font-medium border text-sm outline-none mt-4 border-[#0B0D39] text-center h-[45px] rounded-[43px] rounded-bl-[12px] "
                      />
                      <ErrorMessage
                        component="div"
                        className="text-red-700"
                        name="email"
                      />
                      <div className=" flex items-center ">
                        <input
                          type="checkbox"
                          className=" rounded-[43px] rounded-bl-[12px] "
                        />
                        <p className=" ml-3 font-medium my-4  text-sm ">
                          Click to agree to Hiroek Terms and Condition.
                        </p>
                      </div>
                      <button
                        disabled={!formik.isValid || !formik.dirty}
                        type="submit"
                        className="  w-[90%] font-bold border text-sm outline-none mt-4 text-white bg-[#0B0D39] text-center h-[45px] rounded-[43px] rounded-bl-[12px] "
                      >
                        Get Access
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  role="button"
                  onClick={() => setIsShown(false)}
                  className=" fixed z-10 inset-0 bg-black bg-opacity-30 "
                />
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
}
