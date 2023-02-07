import Modal from './component/page/Modal.jsx';
import './App.css';
import styled from "styled-components";
import "./App.css";
import React, { useState } from "react";

const MainTitleText = styled.p`
text-align: center;
border: 5px solid coral;
color: coral;
margin: 10px;
font-size: 20px;
display: block;
`;




function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };




    return ( 
        
        <div className="App">
          <MainTitleText>샤브샤브의 종류</MainTitleText>
          <div id="menu">
            
          <React.Fragment>
            <h2> <button id="addButton" href="#pop_up" onClick={openModal} >  추가</button> <li>일본식 육수</li> <li> 한국식 육수</li> <li> 마라 육수</li> </h2> 
            <Modal open={modalOpen} close={closeModal} />
            </React.Fragment>
          

        </div>
        
        <div id="imageblock">
        <h3>
            <div id="imageinnerblock">
        <img src={ require("./곰돌이.jfif")} alt="곰돌이 샤브샤브" width="300px"/>
        <span>곰돌이 <br/>샤브샤브</span>
        </div>
    
        <div id="imageinnerblock">
            <img src={ require('./스키야키.jpg') }  alt="스키야키" width="300px" />
            <span>스키야키</span>
        </div>    

        <div id="imageinnerblock">
            <img src={ require("./훠궈.jpg")} alt="훠궈" width="300px" />
            <span>훠궈</span>
        </div> 

        <div id="imageinnerblock">
            <img src={ require("./밀푀유나베.jpg")} alt="밀푀유나베" width="300px"/>
            <span>밀푀유나베</span>
        </div> 

        <div id="imageinnerblock">
            <img src={ require("./칼국수.jfif")} alt="칼국수" width="300px"/>
            <span>샤브샤브 <br/>칼국수</span>
        </div> 
        <div id="new_block">

        </div>

    </h3>
    </div>

        
        </div>

        
    );
}



export default App;
