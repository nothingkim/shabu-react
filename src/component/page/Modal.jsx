import React, { useState } from 'react';
import './modal.css';
import styled from 'styled-components';

const Modal = (props) => {
    
const { open, close, header } = props;

  return (

    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
        
            <div class="pop_inner">
                <span>이름</span><input class="in1" id="name" placeholder='만두 전골'></input><br/>
                <span>이미지</span><input class="in1" id = "img" placeholder='https://recipe1.ezmember.co.kr/cache/recipe/2018/11/10/575c652e5113bd993970f93033b52a551.jpg'></input><br/>
                <span>내용</span><input class="in1" id="doc" placeholder='얼큰 국물'></input><br/>
                <button id = "inputbutton"> 입력  </button>
          
            </div>

            {props.children}
        </main>
            
        </section>
      ) : null}
    </div>
  );
      };


export default Modal;