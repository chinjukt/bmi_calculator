
import React, { useState } from 'react'; 
// import './App.css'; 

function App() { 
	const [heightValue, setHeightValue] = useState(''); 
	const [weightValue, setWeightValue] = useState(''); 
	const [bmiValue, setBmiValue] = useState(''); 
	const [bmiMessage, setBmiMessage] = useState(''); 

	const calculateBmi = (e) => {
    e.preventDefault();
		if (heightValue && weightValue) { 
			const heightInMeters = heightValue / 100; 
			const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
			setBmiValue(bmi); 

			let message = ''; 
			if (bmi < 18.5) { 
				setBmiMessage('You are Underweight'); 
			} else if (bmi >= 18.5 && bmi < 25) { 
				setBmiMessage('You are Normal weight'); 
			} else if (bmi >= 25 && bmi < 30) { 
				setBmiMessage(message = 'You are Overweight'); 
			} else { 
				setBmiMessage('You are Obese'); 
			} 
			// setBmiMessage(message); 
		} else { 
			setBmiValue(false); 
			setBmiMessage(false); 
      alert('please fill the form')
		} 
  
	}; 

	return ( 

    <div className='container'>
    
      <div style={{minHeight:'100vh',backgroundImage: 'linear-gradient(to right, #e9f1f7 , #8cc9ed)'}} >
        <div className='row justify-content-around align-items-center p-5 '>
          <div className="col-md-6 text-center align-middle">
            <h1 className='mb-5'>Body Mass Index Calculator</h1>
            <p className='fs-5'>Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. View the BMI tables or use the tool below to compute yours.</p>
          </div>
          <div className='col-md-1'></div>
          <div className="col-md-5 align-middle">
            <div className='rounded' style={{border:"2px",backgroundColor:'white',padding:"20px",boxShadow: "10px 10px 10px 10px #81a8b3"}}>
              
              <form action="" className='mt-4'>
              <div className="mb-3 row">
                <label style={{display: 'block', fontWeight: 'bold'}} htmlFor="height" className="col-sm-6 col-form-label">Enter Your Height (cm):</label>
                <div className="col-sm-6">
                  <input type="number" className="form-control" id="weight" value={heightValue} onChange={(e) => setHeightValue(e.target.value)} />
                </div>
              </div>

              <div className="mb-3 row ">
                <label style={{display: 'block', fontWeight: 'bold'}} htmlFor="weight" className="col-sm-6 col-form-label">Enter Your Weight (kg):</label>
                <div className="col-sm-6">
                  <input type="number" className="form-control" id="weight" value={weightValue} onChange={(e) => setWeightValue(e.target.value)} />
                </div>
              </div>
              <div className='mb-3 d-flex justify-content-center'>
                <button onClick={(e)=>calculateBmi(e)} type='submit' className='mt-4 btn btn-primary rounded p-2 fs-5 fw-bolder'>Calculate BMI</button>
                <button style={{border:'0px',background:'white',fontSize:'24px',fontWeight:'bolder',color:'#097fe6',marginLeft:'20px',marginTop:'20px'}}><i class="fa-solid fa-arrows-rotate"></i></button>
              </div>
              </form>
            </div>
          </div>
        </div>

        <div className='row justify-content-around align-items-center p-5 mt-3' >
          {bmiValue && bmiMessage && ( 
            <div className="col-md-5 text-center align-middle">
              <div className='rounded' style={{border:"2px",backgroundColor:'white',padding:"20px",boxShadow: "10px 10px 10px 10px #81a8b3"}}>
                
                
                  <div className="result"> 
                    <h3 style={{fontSize:'24px',fontWeight:'bolder',color:'#307bf2'}}> 
                      Your BMI is : <span className="bmi-value">{bmiValue}</span> 
                    </h3>
                    <p style={{color:'#075fed',textAlign:'center',fontWeight:'bolder'}}>&  </p> 
                    <p> 
                    <span style={{color:'#307bf2'}} className="fs-5 fw-bolder">{bmiMessage}</span> 
                    </p> 
                  </div> 
                

              </div>
            
            </div>
              )}
            <div className='col-md-1'></div>
            <div className='col-md-6 align-middle row'>
            <img className='col-md-12' src="https://o.remove.bg/downloads/fb329efe-eb62-4680-83b8-de9c67adc31e/bmi-calculator-removebg-preview.png" alt="no image" />
            </div>
        </div>
          
         
      </div>
    </div>

		
	); 
} 

export default App;

