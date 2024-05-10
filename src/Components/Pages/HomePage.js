// eslint-disable-next-line import/no-extraneous-dependencies
import anime from "animejs"
import {Modal} from "bootstrap"
import test from "../../img/bg-img.jpg"
import ganesh from "../../img/ganesh.svg"

// import ganesh from "../../img/noun-ganesha-111519.svg"

const HomePage = () => {
  const main = document.querySelector('main');
  const svgLoc = 
    '<svg style="margin-bottom:12px;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E2E8F0"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>'
  const svgDates = '<svg style="margin-bottom:12px;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E2E8F0"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>'
  // const ganesh = `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;" d="m 49.455028,958.36723 c -1.632008,0 -2.955406,1.94278 -2.955406,4.33589 0,2.39311 1.323398,4.33588 2.955406,4.33588 1.632003,0 2.955401,-1.94277 2.955401,-4.33588 0,-2.39311 -1.323398,-4.33589 -2.955401,-4.33589 z m 8.992588,4.64699 c 4.027221,3.42142 6.919139,6.30729 7.806541,13.97983 0.77774,-7.41029 -0.847808,-11.25601 -7.806541,-13.97983 z m -16.040821,0.11666 c -5.720106,1.26992 -9.277228,6.56966 -7.806556,13.2118 -0.180747,-3.35251 2.301855,-9.49295 7.806556,-13.2118 z m 3.38316,4.55948 c -0.961502,0.0278 -1.795331,0.25743 -2.508236,0.90411 2.685963,-0.51322 6.70167,3.25813 12.3466,-0.56385 -4.107218,0.85752 -7.381242,-0.41125 -9.838364,-0.34026 z m -1.574949,2.82902 c -1.374389,0.0278 -2.568279,0.25743 -3.587299,0.90412 3.83944,-0.51323 9.585459,3.25812 17.654642,-0.56386 -5.871081,0.85752 -10.554928,-0.41125 -14.067343,-0.34026 z m -1.263797,3.02344 c -1.707816,0.0277 -3.196065,0.25744 -4.462283,0.90414 4.770798,-0.51324 11.905609,3.2581 21.932199,-0.56386 -7.295303,0.85751 -13.10553,-0.41126 -17.469916,-0.34028 z m -10.16895,3.86925 c -6.991733,0.0237 -14.036169,4.75455 -11.413266,6.60106 3.041203,2.12323 9.207853,7.99803 11.568818,13.12432 -1.551714,-6.81422 -8.461509,-12.75928 -9.993928,-13.77569 6.593065,-5.20959 15.915401,-3.85484 18.578218,5.22058 0.690725,5.41417 1.644667,9.22157 2.780415,12.06466 -0.794662,1.4642 -2.098959,2.6058 -3.606742,2.129 1.657703,2.8554 3.403721,2.2929 4.744196,0.3014 3.040802,5.6022 6.96436,6.4632 10.441112,11.5785 2.211027,2.4032 4.830963,10.1336 0.388871,12.6577 -0.004,0 -0.0055,0.01 -0.0097,0.01 -4.445629,2.6614 -8.013734,4.4496 -9.877254,6.5428 -8.114507,8.6439 1.606776,13.6604 3.208169,13.3479 -1.138764,-0.6641 -8.177133,-5.5043 -1.730468,-11.8508 1.769044,-1.9871 4.931605,-4.0645 9.332835,-6.6983 4.995729,-3.4987 6.086455,-9.2704 0.466646,-15.8172 -8.07483,-10.392 -12.545422,-9.2509 -13.415959,-25.01409 -1.279625,-7.95031 -6.359777,-10.43894 -11.461924,-10.42168 z m 33.151081,0.94302 c -5.231664,0.30213 -8.905104,2.56305 -11.286914,6.41633 -1.624818,2.62857 -2.724416,10.64721 -1.27353,14.04784 1.621968,3.80174 4.547783,7.45164 6.717691,11.05364 4.079564,7.5955 6.206862,13.5013 2.576258,17.1782 -9.26567,6.5211 -9.648943,7.4745 -12.550742,11.0731 3.143149,-3.118 11.637211,-8.0118 13.940945,-9.9745 3.132145,-2.7046 2.918385,-6.8861 2.440154,-9.2356 -0.675415,-3.3184 -2.379714,-7.3542 -4.549766,-10.9565 -2.170052,-3.6021 -5.767157,-9.32636 -5.930251,-10.82015 -0.117142,-1.07293 -1.275508,-7.30519 1.331878,-10.85917 7.163346,-10.10801 21.10907,-1.23493 20.201733,0.96247 -7.968748,5.31228 -8.979177,7.93973 -10.013372,13.64925 1.446613,-7.86528 11.939442,-11.6939 12.064654,-13.57149 -0.98489,-3.59912 -4.979359,-8.8159 -13.668738,-8.96342 z m -16.468606,1.19576 c -0.907901,0 -1.642958,0.76619 -1.642958,1.72076 l 0,1.33186 c 0,0.0497 0.0059,0.0972 0.0096,0.14584 -0.708459,0.62515 -1.176312,1.64693 -1.176312,2.79985 0,1.90223 1.260149,3.44149 2.809559,3.44149 1.549348,0 2.799855,-1.53926 2.799855,-3.44149 0,-1.15204 -0.459049,-2.17458 -1.166606,-2.79985 0.0036,-0.0487 0,-0.0961 0,-0.14584 l 0,-1.33186 c 0,-0.95457 -0.725316,-1.72076 -1.633249,-1.72076 z m 15.204782,4.20952 c -4.076552,1.46199 -8.741699,5.23445 -7.427394,12.56046 -0.01087,-5.2553 4.720686,-10.5991 7.427394,-12.56046 z m -29.651229,2.90678 c 2.487954,2.25129 4.726344,3.99038 5.473316,9.08008 1.03392,-3.02073 -0.979517,-9.21186 -5.473316,-9.08008 z" fill="#000000" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g><text x="0" y="115" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by mantisshrimpdesign</text><text x="0" y="120" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>`

  main.innerHTML = `
  <div id="home-container">
    
    <div id="home-img-div">
      <img src="${test}" id="card">
      <div id="text-container">
        <img id="ganesh-img" src="${ganesh}">
        <h6 id="religious-text">|| ॐ गणपतये नमः ||</h6>
        <h1 id="title-span">Save the date</h1>
        <div id="namespace"> 
          <div id="name1">Ashmita</div>
          <div id="separator">&</div>
          <div id="name2">Jaideep</div>
        </div>
        <div id="textspace">
          <div id="text-dates" class="subtext">${svgDates} October 27th - 28th 2024</div>
          <div id="text-location" class="subtext"><a class="subtext" target="_blank" style="text-decoration:none; background:none;" href="https://en.wikipedia.org/wiki/Chandigarh">${svgLoc} Chandigarh, India</a></div>
          <button id="rsvp-btn" data-bs-toggle="modal" data-bs-target="#rsvpModal" type="button" class="btn btn-primary">RSVP</button>
          <div id="text-desc" class="subtext">Formal invitation to follow</div>
        </div>
      </div>
      <div id="overlay"></div>
    </div>
    <div id="hashtag">Aish Weds Jai</div>
    <div id="counter">Time remaining xxd xxh xxmin</div>
  </div>
  

  <div id="rsvpModal" class="modal fade">
    <div class="modal-dialog modal-dialog-centered " role="document" >
      <div class="modal-content" class="form-card">
        <div class="modal-body text-center opacity-100" class="form-card">
          <span id="rsvp-title" class="rsvp-texts">RSVP</span>

          <iframe id="iframe-form" src="https://docs.google.com/forms/d/e/1FAIpQLSdlEwWcJLde5Ar1iHSDIwCeXeUOoSWKgGZi1wsgu_3yPYDMEg/viewform?usp=pp_url" frameborder="0" marginheight="0" marginwidth="0">Chargement en cours...</iframe>
        </div>
        <div class="modal-footer bg-transparent">
        </div>
      </div>
    </div>
  </div>
  `;

  const title = document.getElementById("title-span");
  anime({
    targets: title,
    opacity: [0,1],
    easing: 'easeInOutQuad',
    duration: 1800,
    delay: (el, i) => 150 * (i+1)
  }).play();

  anime({
    targets: "#namespace",
    opacity:[0,1],
    easing:'easeInOutQuad',
    duration:1800,
    delay: 1000
  }).play();

  anime({
    targets: "#text-dates",
    opacity:[0,1],
    translateY: [-20,0],
    easing: 'easeInOutQuad',
    duration: 800,
    delay: 2000
  }).play();

  anime({
    targets: "#text-location",
    opacity:[0,1],
    translateY: [-20,0],
    easing: 'easeInOutQuad',
    duration: 800,
    delay: 2700
  }).play();

  anime({
    targets: "#rsvp-btn",
    opacity:[0,1],
    translateY: [-20,0],
    easing: 'easeInOutQuad',
    duration: 800,
    delay: 3600
  }).play();

  anime({
    targets: "#text-desc",
    opacity:[0,1],
    translateY: [-20,0],
    easing: 'easeInOutQuad',
    duration: 800,
    delay: 4200
  }).play();

  const divContainer = document.getElementById("card");
  divContainer.style.height = "100vh";

  // eslint-disable-next-line no-unused-vars
  const rsvpModal = new Modal(document.getElementById('rsvpModal'), {
    keyboard: false,
    backdrop: true
  })
  // let url;
  // const rsvpForm = document.getElementById('rsvp-formulaire');
  // rsvpForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const name = e.target[0].value;
  //   console.log(name);
  //   let optSelected;
  //   // eslint-disable-next-line no-plusplus
  //   for(let x = 1; x < 4; x++){
  //     if (e.target[x].checked){
  //       optSelected = e.target[x].id;
  //       break; 
  //     }
  //   }
  //   if (optSelected === 'yes'){
  //     optSelected = "Yes"
  //   } else if (optSelected === 'no'){
  //     optSelected = "No"
  //   } else {
  //     optSelected = "Maybe"
  //   }
  //   const nbPeople = e.target[4].value;
  //   console.log(nbPeople);
  //   url = `https://docs.google.com/forms/d/e/1FAIpQLSdlEwWcJLde5Ar1iHSDIwCeXeUOoSWKgGZi1wsgu_3yPYDMEg/viewform?usp=pp_url&entry.1589004152=${name}&entry.442451771=${optSelected}&entry.446665189=${nbPeople}`
  //   console.log(optSelected)
  //   window.open(url);
  //   console.log(e);
  // })


  // const submitBtn = document.getElementById("submit-btn");
  // submitBtn.addEventListener('click', () => {
  //   // e.preventDefault();
  //   // console.log(e);
  // })

  // let url = 'https://docs.google.com/forms/d/e/1FAIpQLSdlEwWcJLde5Ar1iHSDIwCeXeUOoSWKgGZi1wsgu_3yPYDMEg/viewform?usp=pp_url&entry.1589004152=test&entry.442451771=No&entry.446665189=54'

};

export default HomePage;

