import React, { Component } from "react";
import "../assets/css/styles1.css";
import TextBox from "../components/TextBox";
import Interests from "../components/InterestBubbles"
import { noAuto } from "@fortawesome/fontawesome-svg-core";

const Profile = ()=> {
    return (
            <div>
              <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"40px 100px",
                marginTop:"40px",
                borderBottom:"1px solid grey"
              }}> 
                <div>
                  <img style={{width:"240px", height:"240px", borderRadius:"120px"}}
                  src={require("../assets/img/bipin.jpg")} alt=""/>
                </div>
                <div>
                  <h2> bregmi </h2>
                  <div style={{display:"flex", justifyContent:"space-between", width:"115%"}}>
                    <h4>25 posts</h4>
                    <h4>20 following</h4>
                    <h4>5 followers</h4>
                  </div>
                </div>
              </div>


              <div style={{
                textAlign:"left",
                marginTop:"40px",
                marginLeft:"100px",        
                marginBottom:"40px"
              }}>
              <h1>Settings</h1>
              </div>

              <div style={{
                display:"table-row",
                padding:"20px",
                textAlign:"right",
              }}> 
                  <h4 style={{marginLeft: "450px"}}>Full Name:</h4>
                  <div> 
                    <TextBox> </TextBox>
                  </div>
              </div>

              <div style={{
                display:"table-row",
                padding:"20px",
                textAlign:"right",
              }}> 
                  <h4>Username:</h4>
                  <TextBox> </TextBox>
              </div>
              <div style={{
               display:"table-row",
               textAlign:"right",
               padding:"20px",
              }}> 
                  <h4>E-Mail:</h4>
                  <TextBox> </TextBox>
              </div>
             <div style={{
                textAlign:"right",
                display:"table-row",
                padding:"20px",
              }}>  
             
                  <h4>Phone Number:</h4>
                  <TextBox> </TextBox>
              </div>

              <div style={{
                margin:"10px 368px"
              }}>
                <h4>Update Interests:</h4>
              </div>

              <Interests></Interests>
             
             <div style={{
                marginTop:"10px",
                marginLeft:"370px"
              }}>
                <h4 class="underline">Change Password</h4>
             </div>

             <div style={{
                marginTop:"10px",
                marginLeft:"370px"
              }}>
                <h4 class="underline">Delete Account</h4>
             </div>

            </div>
  );
}

export default Profile;