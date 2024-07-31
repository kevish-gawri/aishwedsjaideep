/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable spaced-comment */

/* https://script.google.com/macros/s/AKfycby8I77DIGMtW8WEDFdUP-bOhxLTmERqG4R5raccJ3VB5GwlijBehC8xUJjZFDVmFkDPgA/exec */
// https://script.google.com/macros/s/AKfycbylxkkiOFNEI0jLDJ33CK22_D6_BGufGwnNkQ3mIwsT/dev

import anime from "animejs";
import test from "../../img/bg-img2.jpg"



const FormPage = () => {
    const html = `
    <div id="fullPage">
        <div class="alert alert-danger" role="alert" id="alert" style="display: none;">
        </div>
        <div id="container-evoBar">
             <div id="evoBar-iCounter">
                <div class="evoBar-count">1</div> 
                <div class="evoBar-count">2</div> 
                <div class="evoBar-count">3</div>
             </div>
             <div id="div-evoBar">
                <div id="evoBar-1-100"><div class="evoBar-filled"></div></div>
             </div>
        </div>
        <div id="formContainer">
            <form id="myForm" >
                <div id="loading-container" style="display: none;">
                    <span class="msg">Please wait</span>
                    <span class="loading"></span>
                </div>
                <div class="form-group">    
                    <label id="fl-name" class="page1 formLabel">Your name (First and Last name)</label>
                    <input id="fi-name" name="name" class="page1 formInput" type="text">
                </div>
                <div class="form-group">
                    <label id="fl-address" class="page1 formLabel">Your home address</label>
                    <textarea id="fi-address" name="address" class="page1 formInput" rows="4"></textarea>
                </div>
                <div class="form-group">
                    <label id="fl-nrGuests" class="page1 formLabel">Please indicate the number of guests attending (including you)</label>
                    <div id="container-nrGuests">
                        <input id="fi-nrGuests" name="nrGuests" class="page1 formInput" type="number" min="1" max="9">
                    </div>
                </div>    
                <div class="form-group">
                    <label id="fl-checkInDate" class="page2 formLabel">When will you be checking in at the hotel ?</label>
                    <button class="date-cover page2" class="page2 formInput inputDate" id="btn-date-in">
                        Select a date
                    </button>
                    <input id="fi-checkInDate" name="checkInDate" class="page2 formInput inputDate" type="date" value="2024-10-01">
                    
                    
                </div>
                
                <div class="form-group">
                    <label id="fl-checkOutDate" class="page2 formLabel">When will you be checking out from the hotel ?</label>
                    <button class="date-cover page2" class="page2 formInput inputDate" id="btn-date-out">
                        Select a date
                    </button>
                    <input id="fi-checkOutDate" name="checkOutDate" class="page2 formInput inputDate" type="date" value="2024-10-01">
                    
                </div>
                <span class="page2" id="nights-counter">For <b id="nights-number"></b> night(s)</span>
            </form>
        </div>
        <div id="button-container">
            <button id="fb-previous" class="fb-buttons">
                Previous
            </button>
            <button id="fb-next" class="fb-buttons">
                Next
            </button>
            <button id="fb-submit" class="fb-buttons">
                Submit
            </button>
        </div>
    </div>
`;

    const main = document.querySelector('main');
    main.innerHTML = html;
    document.getElementById('fullPage').style.backgroundImage = `url(${test})`;

    let pageNumber = 1;
    let nrGuests;

    let checkInAttempts = 0;
    let checkOutAttemps = 0;
   
    const myForm = document.getElementById('myForm');
    const fbSubmit = document.getElementById('fb-submit');

    fbSubmit.addEventListener('click', () => {
        
        if (checkPage()){
            const formData = new FormData(myForm);
            console.log(nrGuests);
            for(let x = 1; x <= nrGuests; x++){
                const day = document.getElementById(`fi-guest${x}-day`).value;
                const month = document.getElementById(`fi-guest${x}-month`).value;
                const year = document.getElementById(`fi-guest${x}-year`).value;

                const dob = `${day}/${month}/${year}`;
                formData.append(`g${x}-dob`, dob);
                console.log(dob);
                console.log(formData.get(`g${x}-dob`))
            }
            // DATE OF BIRTH OF THE GUEST 
            loading();
            // fetch('https://script.google.com/macros/s/AKfycbylxkkiOFNEI0jLDJ33CK22_D6_BGufGwnNkQ3mIwsT/dev', {
            fetch('https://script.google.com/macros/s/AKfycby8I77DIGMtW8WEDFdUP-bOhxLTmERqG4R5raccJ3VB5GwlijBehC8xUJjZFDVmFkDPgA/exec', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(result => {
                successfull();
                console.log('Success:', result);
                // alert('Form submitted successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            }); 
        }
        // myForm.submit();

        
    })
    const fbNext = document.getElementById('fb-next');
    const fbPrevious = document.getElementById('fb-previous');

    function loading(){
        document.getElementById('myForm').innerHTML = `
            <div id="loading-container">
                    <span class="msg">Please wait</span>
                    <span class="loading"></span>
                </div>
        `
        fbSubmit.style.display = 'none'
        fbPrevious.style.display = 'none'
    }

    function successfull(){
        document.getElementById('formContainer').innerHTML = `
        <div class="success-animation">
            <span class="msg">Done, thank you!</span>
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
        </div>`
    }

    const inputDate = document.querySelectorAll('.inputDate');

    inputDate.forEach(e => {
        e.addEventListener('input', (i) => {
            formatDate(i.target);

            
        })

        e.addEventListener('click', (event) => {
            console.log("hejd ", event.target.value.length)
            event.target.setSelectionRange(event.target.value.length, event.target.value.length); // Place le curseur au début du champ
        });
    }) 

    function formatDate(input1) {
        let {value} = input1;
        value = value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 1) {
            value = `${value.slice(0, 2)  }/${  value.slice(2, 4)}`;
        }
        value = value.slice(0, 5); // Limit length to 5 characters
        // eslint-disable-next-line no-param-reassign
        input1.value = value;
    }


    
    const myAlert = document.getElementById('alert');

    fbNext.addEventListener('click', () => {
        
        if (pageNumber === 1){
            
              

            //   for(let x = 7; x<=100; x++){
            //     document.querySelector('.evoBar-filled').style.width = `${x}%`
            //   }

            
           
              
            //check page
            if (checkPage()){
                clearPage();
                evoIncr0to50();
                pageNumber = 2;
                fbPrevious.style.display = "block";
                
                page3();
                displayPage(pageNumber);
            }
        } else if (pageNumber === 2){
            
            if (checkPage()){
                clearPage();
                evoIncr50to100();
                pageNumber = 3;
                fbNext.style.display = "none";
                fbSubmit.style.display = "block";
                displayPage(pageNumber);
            }
        }
    })

    fbPrevious.addEventListener('click', () => {
        if (pageNumber === 3){
            evoDecr100to50();
            clearPage();
            pageNumber = 2;
            fbNext.style.display = "block";
            fbSubmit.style.display = "none";
            displayPage(pageNumber);
        } else if (pageNumber === 2){
            evoDecr50to0();
            clearPage();
            pageNumber = 1;
            fbPrevious.style.display = "none";
            displayPage(pageNumber);
        
        }
    })

    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    function checkPage(){
        console.log('checking page ', )
        let invalidDateP3;
        let bool = true;
        let checkDate = true;
        if (pageNumber === 1){
            const nrGuestsValue = document.getElementById('fi-nrGuests').value;

            nrGuests = parseInt(nrGuestsValue, 10);
            console.log('hdzscb ', nrGuests)
            if (nrGuests < 1 || nrGuests > 9){
                showAlert('Number of guests must be between 1 and 9');
                return false;
            }
        } else if( pageNumber === 2){
            let text = "Please select a "
            if (checkInAttempts === 0){
                bool = false;
                text += "check in ";
            }
            if (checkOutAttemps === 0 && checkInAttempts === 0)
                text += "and a "    
            if (checkOutAttemps === 0) {
                bool = false;
                text += "check out ";
            }
            text += "date!"
            // if negative nights number
            if (parseInt(document.getElementById('nights-number').innerText, 10) < 0){
                text = "Please select valid dates"
                document.getElementById('nights-number').style.color = 'red'
                bool = false;
            }
            if (!bool){
                showAlert(text);
                return bool;
            }
                
        } else if(pageNumber === 3) {
            // check dates
            const allDobs = document.querySelectorAll('.inputDOB');
            
            // eslint-disable-next-line consistent-return
            allDobs.forEach((field) => {
                const placeholder = field.placeholder;
                console.log(placeholder);
                const value = parseInt(field.value, 10);
                console.log(value);
                if (placeholder === 'dd' && (value <= 31 && value >= 1)){
                    checkDate = true;
                    field.classList.remove('fi-incorrect');
                } else if (placeholder === 'mm' && (value <= 12 && value >= 1)){
                    checkDate = true;
                    field.classList.remove('fi-incorrect');
                } else if (placeholder === 'yyyy' && (value <= 2024 && value >= 1900)){
                    checkDate = true;
                    field.classList.remove('fi-incorrect');
                } else {
                    invalidDateP3 = field.id;
                    document.getElementById(invalidDateP3).classList.add('fi-incorrect');
                    showAlert('Please enter valid data');
                    checkDate = false;
                    return false;
                }
            })
        }

        //If dates are invalid
        

        const className = `page${pageNumber}`;
        const elems = document.querySelectorAll(`input.${className}, textarea`);
        console.log(invalidDateP3);
        console.log(checkDate, 'zesdfsdez');
        
        
        
        elems.forEach(e => {
            if(e.value.trim() === ''){
                e.classList.add('fi-incorrect');
                bool = false;
                showAlert('All fields are required. Please fill out each one.');
            } else {
                e.classList.remove('fi-incorrect');
            }
        })
        if(!checkDate){
            showAlert('Invalid data');
            return false;
        }
        return bool;
    }

    function nightsCounter(){
        const checkInDate = new Date(document.getElementById("fi-checkInDate").value);
        const checkOutDate = new Date(document.getElementById("fi-checkOutDate").value);

        const differenceInMilliseconds = checkOutDate - checkInDate;

        // Convert the difference from milliseconds to days
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

        // Round the difference to the nearest whole number (optional)
        const roundedDifferenceInDays = Math.round(differenceInDays);

        console.log("for " , roundedDifferenceInDays)

        document.getElementById('nights-counter').style.color = 'black';
        document.getElementById('nights-number').style.color = 'black';
        document.getElementById('nights-number').innerText = roundedDifferenceInDays;

    }

    function clearPage(){

        const className = `.page${pageNumber}`;
        const elems = document.querySelectorAll(className);
        elems.forEach(e => {
            e.style.display = 'none';
        })
        myAlert.style.display = 'none';
    }

    function clearPageByPageNr(i){
        const className = `.page${i}`;
        const elems = document.querySelectorAll(className);
        elems.forEach(e => {
            e.remove();
        })
        myAlert.style.display = 'none';
    }

    function displayPage(number){
        const className = `.page${number}`;
        const elems = document.querySelectorAll(className);
        elems.forEach(e => {
            e.style.display = 'block';
        })
    }

    function showAlert(text){
        myAlert.style.display = 'block';
        myAlert.innerText = text;
        setTimeout(() => {
            anime({
                targets: '#alert',
                opacity: 0,
                duration: 500,
                easing: 'linear',
                complete: () => {
                    myAlert.style.display = 'none';
                    myAlert.style.opacity = 1; // Reset the opacity for next time
                }
            });  
        }, 2500);
    }

    
    function page3(){

        
        const nrGuestsValue = document.getElementById('fi-nrGuests').value;
        const address = document.getElementById('fi-address').value;
        const name = document.getElementById('fi-name').value;

        const checkInDate = document.getElementById("fi-checkInDate").value
        const checkOutDate = document.getElementById("fi-checkOutDate").value

        nrGuests = parseInt(nrGuestsValue, 10);
        console.log(nrGuests);
        const prefilledData = {};
        for(let x = 1; x <= nrGuests; x++){
            console.log("dzaza " , x);
            const data = [document.getElementById(`fi-guest${x}-name`)?.value ?? '', document.getElementById(`fi-guest${x}-passport`)?.value ?? '', document.getElementById(`fi-guest${x}-nat`)?.value ?? ''];
            prefilledData[x] = data;
        }
        clearPageByPageNr(3);
        for(let x = 1; x <= nrGuests; x++){
            console.log("dzaza " , x);
            myForm.innerHTML += getGuestQuestions(x);
        }

        console.log(prefilledData);

        document.getElementById('fi-name').value = name;
        document.getElementById('fi-address').value = address;
        document.getElementById('fi-nrGuests').value = nrGuests;

        document.getElementById("fi-checkInDate").value = checkInDate;
        document.getElementById("fi-checkOutDate").value = checkOutDate;

        // eslint-disable-next-line no-shadow
        const checkInBtn = document.getElementById('btn-date-in');
        checkInBtn.addEventListener('click', () => {
            checkInAttempts++;
            console.log('hzbde');
            document.getElementById('fi-checkInDate').showPicker();
            document.getElementById('fi-checkInDate').click();
            document.getElementById('fi-checkInDate').focus();
            checkInBtn.innerText = document.getElementById('fi-checkInDate').value;
        })

        const checkOutBtn = document.getElementById('btn-date-out');
        checkOutBtn.addEventListener('click', () => {
            checkOutAttemps++;
            
            console.log('hzbde');
            document.getElementById('fi-checkOutDate').showPicker();
            document.getElementById('fi-checkOutDate').click();
            document.getElementById('fi-checkOutDate').focus();
            checkOutBtn.innerText = document.getElementById('fi-checkOutDate').value;
        })
        document.getElementById('fi-checkInDate').addEventListener('change', (e)=>{
            checkInBtn.innerText = e.target.value;
            if (checkInAttempts >= 1 && checkOutAttemps >= 1)
                nightsCounter();
        });
        document.getElementById('fi-checkOutDate').addEventListener('change', (e)=>{
            checkOutBtn.innerText = e.target.value;
            if (checkInAttempts >= 1 && checkOutAttemps >= 1)
                nightsCounter();
        });

        console.log(prefilledData.length);
        for(let x = 1; x <= nrGuests; x++){
            document.getElementById(`fi-guest${x}-name`).value = prefilledData[x][0];
            console.log("dzscc ", prefilledData.length);
            if (x === 1){
                document.getElementById(`fi-guest${x}-name`).value = name;
            }
            
            document.getElementById(`fi-guest${x}-passport`).value = prefilledData[x][1];
            document.getElementById(`fi-guest${x}-nat`).value = prefilledData[x][2];
        }

        // Jump to next field
        const dateFields = document.querySelectorAll('.inputDOB');
        dateFields.forEach((e) => {
            e.addEventListener('input', () => {
                const value = e.value;
                const placeholder = e.placeholder;
                const id = e.id;

                if (value.length === 2){
                    if (placeholder === 'dd' && value.length === 2){
                        // If the dd is between 1 and 31
                        const intValue = parseInt(value, 10);
                        if(intValue >= 1 && intValue <= 31){
                            document.getElementById(id).classList.remove('fi-incorrect');
                            document.getElementById(id).style.color = 'black';
                            document.getElementById(id.replace('day', 'month')).focus();
                        } else {
                            document.getElementById(id).classList.add('fi-incorrect');
                            document.getElementById(id).style.color = 'red';
                            showAlert('Please provide a valid data');
                        }
                    } else if(placeholder === 'mm' && value.length === 2){
                        const intValue = parseInt(value, 10);
                        if(intValue >= 1 && intValue <= 12){
                            document.getElementById(id).classList.remove('fi-incorrect')
                            document.getElementById(id).style.color = 'black';
                            document.getElementById(id.replace('month', 'year')).focus();
                        } else {
                            document.getElementById(id).classList.add('fi-incorrect');
                            document.getElementById(id).style.color = 'red';
                            showAlert('Please provide a valid data');
                        }
                    }
                } else if(placeholder === 'yyyy' && value.length === 4) {
                    const intValue = parseInt(value, 10);
                    if(intValue >= 1900 && intValue <= 2024){
                        document.getElementById(id).classList.remove('fi-incorrect');
                        document.getElementById(id).style.color = 'black';
                        document.getElementById(id).blur();
                    } else {
                        document.getElementById(id).classList.add('fi-incorrect');
                         document.getElementById(id).style.borderColor = 'red';       
                        document.getElementById(id).style.color = 'red';
                        showAlert('Please provide a valid data');
                    }
                } else if (placeholder === 'yyyy') {
                        document.getElementById(id).classList.add('fi-incorrect');
                        document.getElementById(id).style.borderColor = 'black';
                        document.getElementById(id).style.color = 'black';
                }
            })
        })
    }

    function getGuestQuestions(i){
        const genericQuestions = i === 1 ?

        `
        <h3 class="page3" style="margin-top:15px">For you</h3>
        <label id="fl-guest${i}-name" name="g${i}-name" class="page3 formLabel">Name</label>
        <input id="fi-guest${i}-name" name="g${i}-name" class="page3 formInput" type="text" value="${document.getElementById('fi-name').value}" readonly>

        <label id="fl-guest${i}-passport" name="g${i}-passport" class="page3 formLabel">Passport number</label>
        <input id="fi-guest${i}-passport" name="g${i}-passport" class="page3 formInput" type="text">

        <label id="fl-guest${i}-nat" name="g${i}-nat" class="page3 formLabel">Nationality</label>
        <input id="fi-guest${i}-nat" name="g${i}-nat" class="page3 formInput" type="text">
                
        <label id="fl-guest${i}-dob" name="g${i}-dob" class="page3 formLabel">Date of birth</label>
        <div class="date-fields">
            <input id="fi-guest${i}-day" class="page3 formInput inputDOB" type="number" maxlength=2 placeholder="dd" min="1" max="31" aria-label="Day"><div class="dates-separators page3">/</div>
            <input id="fi-guest${i}-month" class="page3 formInput inputDOB" type="number" maxlength=2 placeholder="mm" min="1" max="12" aria-label="Month"><div class="dates-separators page3">/</div>
            <input id="fi-guest${i}-year" class="page3 formInput inputDOB" type="number" maxlength=4 placeholder="yyyy" min="1900" max="2099" aria-label="Year">
        </div>
        ` :
        `
        <h3 class="page3" style="">For guest ${i-1}</h3>
            <label id="fl-guest${i}-name" name="g${i}-name" class="page3 formLabel">Name</label>
            <input id="fi-guest${i}-name" name="g${i}-name" class="page3 formInput" type="text">

            <label id="fl-guest${i}-passport" name="g${i}-passport" class="page3 formLabel">Passport number</label>
            <input id="fi-guest${i}-passport" name="g${i}-passport" class="page3 formInput" type="text">

            <label id="fl-guest${i}-nat" name="g${i}-nat" class="page3 formLabel">Nationality</label>
            <input id="fi-guest${i}-nat" name="g${i}-nat" class="page3 formInput" type="text">
            
            <label id="fl-guest${i}-dob" name="g${i}-dob" class="page3 formLabel">Date of birth</label>
            <div class="date-fields">
                <input id="fi-guest${i}-day" class="page3 formInput inputDOB" type="number"  maxlength=2 placeholder="dd" min="1" max="31" aria-label="Day"><div class="dates-separators page3">/</div>
                <input id="fi-guest${i}-month" class="page3 formInput inputDOB" type="number" maxlength=2 placeholder="mm" min="1" max="12" aria-label="Month"><div class="dates-separators page3">/</div>
                <input id="fi-guest${i}-year" class="page3 formInput inputDOB" type="number" maxlength=4 placeholder="yyyy" min="1900" max="2099" aria-label="Year">
            </div>
            `
    
    
 
    return genericQuestions;
   }

   function evoIncr0to50() {
            anime({
                targets: '#evoBar-1-100 .evoBar-filled ',
                width: '50%', // -> from '28px' to '100%',
                easing: 'easeInOutSine',
                duration: 1000,
                loop: false
              }).play();
   }

   function evoIncr50to100() {
            anime({
                targets: '#evoBar-1-100 .evoBar-filled ',
                width: '100%', // -> from '28px' to '100%',
                easing: 'easeInOutSine',
                duration: 1000,
                loop: false
              }).play();
   }

   function evoDecr50to0() {
    document.querySelector('#evoBar-1-100 .evoBar-filled').style.width = '50%'

    anime({
        targets: '#evoBar-1-100 .evoBar-filled ',
        width: '3%', // -> from '28px' to '100%',
        easing: 'easeInOutSine',
        duration: 500,
        loop: false
      }).play();
}

function evoDecr100to50() {
    document.querySelector('#evoBar-1-100 .evoBar-filled').style.width = '100%'
    anime({
        targets: '#evoBar-1-100 .evoBar-filled ',
        width: '50%', // -> from '28px' to '100%',
        easing: 'easeInOutSine',
        duration: 500,
        loop: false
      }).play();
}
        
    //https://docs.google.com/forms/d/e/1FAIpQLScTM_gZ243imn8YT7hJwRsJX-0K7yfp__UwgxK3lr0iVMkkIA/viewform?usp=pp_url&entry.1259129787=TESt+n%C3%A0me&entry.1887992450=5&entry.106736024=No&entry.1555918328=12-12&entry.906319806=12-12    
}

export default FormPage;