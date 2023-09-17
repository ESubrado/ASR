import React, { useState } from 'react';

//import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputModal from './inputModal';

const TranscriptionMain = () => {

  const [openInputModal, setOpenInputModal] = useState(false)

  const showModal = (e) => {
    e.preventDefault();
    setOpenInputModal(true);
  }

  return (
    <>
      <div className='md:container md:mx-auto p-1'>
        <section className="text-gray-600 body-font">
          <div className="max-w-5xl pt-52 pb-24 mx-auto">
            <h1 className="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
              Transcription Tool
            </h1>
            <h2 className="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
              This is a sample project that captures audio recording and
              <br />
              transcribe it to a more understandable text.
            </h2>
            <div className="text-center">              
              <a
                className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
                href="/" onClick={showModal}
              >
                <div className="flex text-lg">
                  <span className="justify-center">Show Modal</span>
                </div>
              </a>
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center mx-auto">
            {
              //<img
             //   className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
             //   alt="Placeholder Image"
             //   src="./images/placeholder.png"
             // ></img>
          }
          </div>
          <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
            Clean and tidy code.
          </h2>
          <br></br>
          <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
            Here is our collection of free to use templates made with Next.js &
            styled with Tailwind CSS.
          </p>
          <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
            <div className="ktq4">
              { 
                //<img className="w-10" src="https://nine4.app/favicon.png"/>
              }
              <h3 className="pt-3 font-semibold text-lg text-white">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md text-gray-200 fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
            <div className="ktq4">
              {
                  //<img className="w-10" src="https://nine4.app/favicon.png"></img>              
              }
            
              <h3 className="pt-3 font-semibold text-lg text-white">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md text-gray-200 fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
            <div className="ktq4">
              {
                //<img className="w-10" src="https://nine4.app/favicon.png"></img>
              }
              <h3 className="pt-3 font-semibold text-lg text-white">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md text-gray-200 fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
            <div className="ktq4">
              {
                //<img className="w-10" src="https://nine4.app/favicon.png"></img>
              }
              <h3 className="pt-3 font-semibold text-lg text-white">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="pt-2 value-text text-md text-gray-200 fkrr1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                porttitor.
              </p>
            </div>
          </div>         
        </section>
      </div>

      <InputModal show={openInputModal} setShow={(bool) => setOpenInputModal(bool)}></InputModal>
    </>
   
  );
};

export default TranscriptionMain;