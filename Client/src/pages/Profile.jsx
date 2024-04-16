import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { styled } from "@mui/system";
import { AuthContext } from "../context/AuthContext";
import Button from "@mui/material/Button";
import { PostForm } from "../components/PostForm";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel" 
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const { loggingout , myprofile } =  useContext(AuthContext);
   console.log
  const [value, setValue] = useState(0);

  const handeLogout=()=>{
    const con =confirm("Are you sure you want to logout?");
    if(con){
    loggingout() 
     }
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 const StyledTabs = styled(Tabs)({
   ".MuiTabs-indicator": {
     backgroundColor: "#08415C",
   },
 });

 const StyledTab = styled(Tab)(({ }) => ({
   "&.Mui-selected": {
     backgroundColor: "#f5f5f5",
     color: "#08415C",
     borderRadius:"5px 5px 0 0"
   },
 }));


  return (
    <div className=" w-screen  flex  justify-center">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <StyledTabs value={value} onChange={handleChange} centered>
            <StyledTab
              icon={<HomeIcon />}
              label="My Profile"
              {...a11yProps(0)}
            />
            <StyledTab icon={<PostAddIcon />} label="Posts" {...a11yProps(1)} />
        
          </StyledTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box
            className="sm:w-5/6 md:w-5/6 mt-14  mb-20 "
            sx={{
              height: "auto",
              py: 16,
              backgroundColor: "rgba(8, 65, 92, 0.15)",
              marginX: "auto",
              borderRadius: "15px",
            }}
          >
            <Box className=" w-full  pl-20">
              <Typography  fontSize={25}>
                Edit Profile 
              </Typography>
            </Box>
            <Box
              className=" grid grid-cols-1   md:grid-cols-2 lg:grid-cols-2    "
            >
              <Box className="  lg:w-3/6   flex justify-center items-center ">
                <Box className=" flex justify-center items-center flex-col">
                  <Box className="w-36 h-36  border-solid border-8 border-neutral-100  bg-gray-400 rounded-full  mb-6  p-auto">
                    {" "}
                  </Box>
                  <button className="bg-blue-700 text-white rounded-lg p-3">
                    Change Photo
                  </button>
                </Box>
              </Box>

              <Box
                className=" sm:w-full md:w-11/12 lg:w-full  flex justify-center items-center  max"
              >
                <form className=" w-10/12  ">
                  <div class="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      
                    />
                    <label
                      for="floating_email"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>

                  <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="  relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_first_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        First name
                      </label>
                    </div>
                    <div class="  relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="floating_last_name"
                        id="floating_last_name"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_last_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Last name
                      </label>
                    </div>
                  </div>
                  <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="  relative z-0 w-full mb-5 group">
                      <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        name="floating_phone"
                        id="floating_phone"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_phone"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Phone number
                      </label>
                    </div>
                    <div class="  relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="floating_company"
                        id="floating_company"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_company"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Company 
                      </label>
                    </div>
                    <div class="  relative z-0 w-full mb-5 group">
                      <input
                        type="file"
                        name="floating_company"
                        id="floating_company"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_company"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Upload Id
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update Profile
                  </button>
                </form>
              </Box>
            </Box>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box
            className="sm:w-5/6 md:w-5/6 mt-14 m"
            sx={{
              height: "80vh",
              px: 20,
              backgroundColor: "rgba(8, 65, 92, 0.15)",

              marginX: "auto",
              borderRadius: "15px",
            }}
          >
            <PostForm/>
          </Box>
        </CustomTabPanel>
        

        <Box className="w-full px-32  h-10 ">
        <Button className="w-full  md:w-2/12  sm:w-full xs:w-full lg:w-1/12 xl:1/12  " variant="contained" onClick={handeLogout} color="primary" sx={{backgroundColor:"#cc2936"}}>
          Logout
        </Button>
        </Box>
      </Box>
    </div>
  );
 }
