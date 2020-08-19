// //this will expand and collapse the sections on click
// 			const elements=document.querySelectorAll('.expand-collapse');
// 			for(var i = 0 ; i < elements.length ; i++){
// 				elements[i].addEventListener('click',function(e){
// 					if(this.childNodes[1].innerHTML==='Pricing'){
// 						if(this.classList.contains('dark')){

// 							this.classList.remove('dark');
// 							console.log(this.classList);
// 							this.nextElementSibling.classList.remove('hide');
// 						}
// 						else {
// 							this.classList.add('dark');
// 							this.nextElementSibling.classList.add('hide');
// 						}
						
// 					//this.nextElementSibling.nextElementSibling.childNodes[2].classList.remove('hide');
// 					}
// 					else{
// 						this.classList.toggle('dark');
// 						this.nextElementSibling.classList.toggle('hide');
// 						if(this!==document.getElementsByClassName('expand-collapse')[document.getElementsByClassName('expand-collapse').length-1]
// 							&& this!==document.getElementsByClassName('expand-collapse')[document.getElementsByClassName('expand-collapse').length-2])
// 						this.nextElementSibling.childNodes[1].classList.toggle('hide');
// 						//console.log(this.childNodes[1].innerHTML);
// 					}
// 				})
// 			}


// 			const employeeDetails={};
// 			var pass='';
// 			var cpass='';


// 			//Event Handling of Employee detail section Starts Here
// 			const employee=document.getElementById('addEmployee');
// 			//event listener on Full Name
// 			document.getElementById('fullname').addEventListener('focusout',function(e){
// 				if(this.value.length<3 && isNaN(this.value)){
// 					this.classList='input-text red';
// 					document.getElementById('error').innerHTML='Your Name Must have more than 2 letters';
// 				}
// 				else{
// 					employeeDetails.employeeName=this.value;
// 					this.parentNode.classList.toggle('hide');
// 					document.getElementById('error').innerHTML='';
// 					this.parentNode.nextElementSibling.childNodes[1].innerHTML='Hi <span>'+employeeDetails.employeeName+'</span> will you specify your gender';
// 					this.parentNode.nextElementSibling.classList.toggle('hide');
// 				}
// 			})

// 			//Event Listener on Gender Buttons
// 			const gender=document.getElementsByName('gender');
// 			for(let i=0 ; i<gender.length;i++){
// 				gender[i].addEventListener('focusout',function(e){
// 					if(this.checked){
// 						employeeDetails.gender=this.value;
// 						this.parentNode.classList.toggle('hide');
// 						this.parentNode.nextElementSibling.classList.toggle('hide');
// 						this.parentNode.nextElementSibling.childNodes[1].innerHTML='Please, Enter Your Mail Id';
// 					}
// 				})
// 			}

// 			//Event Listener for email
// 			document.getElementById('empEmail').addEventListener('focusout',function(e){
// 				if(this.value.includes('@metacube.com')){
// 							employeeDetails.email=this.value;
// 							this.parentNode.classList.toggle('hide');
// 							document.getElementById('error').innerHTML='';
// 							this.parentNode.nextElementSibling.classList.toggle('hide');
// 							this.parentNode.nextElementSibling.childNodes[1].innerHTML='Please, Enter Paswword To Secure Yourself.';	
// 						}
// 						else{
// 							this.classList='input-email red';
// 							document.getElementById('error').innerHTML='Your Mail Id Must Be Official';
// 						}
// 			})

// 			//Event listener for password
// 			document.getElementById('password').addEventListener('keyup',function(e){

// 				var mediumRegex = new RegExp(
// 									"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
// 									);
// 				var strongRegex = new RegExp(
// 									"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
// 									);
// 				if(this.value.length>=1) {
// 					pass=this.value;
// 					this.classList='input-password red'
// 				}

// 				if (this.value.match(mediumRegex)) {
// 					pass=this.value;
// 					this.classList ='input-password orange';
// 				}
// 				if(this.value.match(strongRegex)){
// 					pass=this.value;
// 					this.classList='input-password green'
// 				}
// 			})
// 			document.getElementById('confirmpassword').addEventListener('focusout',function(e){
// 				cpass=this.value;
// 				if(cpass.length > 7 ){
// 					this.classList='input-password';
// 					if(cpass===pass){
// 						employeeDetails.password=this.value;
// 						this.parentNode.classList.toggle('hide');
// 						this.parentNode.nextElementSibling.classList.toggle('hide');
// 						document.getElementById('error').innerHTML='';
// 						this.parentNode.nextElementSibling.nextElementSibling.classList.toggle('hide');
// 						this.parentNode.nextElementSibling.childNodes[1].innerHTML='Please, Give Your Mobile Number';
// 					}
// 					else{
// 						document.getElementById('error').innerHTML='password does not match';
// 					}

// 				} 
// 				else{
// 					this.classList='input-password red';	
// 				}
// 			})

// 			//Event Listener on mobile number 
// 			document.getElementById('contactnumber').addEventListener('focusout',function(e){
// 				if(this.value.length > 8 && isNaN(this.value)){
// 					employeeDetails.mobileNumber=this.value;
// 					document.getElementById('error').innerHTML='';
// 				} 
// 				else{
// 					this.classList='input-text red';
// 					document.getElementById('error').innerHTML='Your Mobile Number Must have more than 8 digits';
// 				}
// 			})

// 			//Event Listener on submit button
// 			document.getElementById('addEmployeeSubmit').addEventListener('click',function(e){
// 				e.preventDefault();
// 				if(document.getElementById('contactnumber').value.length>8 && !isNaN(document.getElementById('contactnumber').value)){
// 					console.log('hiii');
// 					employeeDetails.mobileNumber=this.value;
// 					document.getElementById('error').innerHTML='';
// 					console.log(employeeDetails);
// 					document.getElementById('employeeForm').classList.toggle('hide');
// 					document.getElementById('addEmployee').childNodes[1].classList.add('dark');
// 					document.getElementById('addVehicleForm').classList.toggle('hide');
// 					var id=parseInt(Math.random()*100000);
// 					employeeDetails.employeeId=id;
// 					document.getElementById('empIdGenerated').classList.remove('hide');
// 					document.getElementById('empIdGenerated').innerHTML='Your Employee Id is '+id;
// 					document.getElementById('addVehicleForm').childNodes[1].classList.toggle('hide');

// 					this.parentNode.classList.toggle('hide');
// 					this.parentNode.previousElementSibling.classList.toggle('hide');

// 					document.getElementById('fullname').value='';
// 					document.getElementById('female').checked=false;
// 					document.getElementById('female').checked=false;
// 					document.getElementById('empEmail').value='';
// 					document.getElementById('password').value='';
// 					document.getElementById('confirmpassword').value='';
// 					document.getElementById('contactnumber').value='';
// 				}
// 				else{
// 					this.classList='input-text red';
// 					document.getElementById('error').innerHTML='Your Mobile Number Must have more than 8 digits';
// 				}

// 			})
// 			//Handling of employee form events ends here

// 			//Handling of Vehicle details form starts here

// 			//Event for vechile company field
// 			document.getElementById('vehiclemake').addEventListener('focusout',function(e){
// 				if(this.value.length>2){
					
// 					employeeDetails.vehicleCompany=this.value;
// 					this.parentNode.classList.toggle('hide');
// 					this.parentNode.nextElementSibling.classList.toggle('hide');
// 					this.parentNode.nextElementSibling.childNodes[1].innerHTML='Specify Your Vehicle Model';
// 				}
// 				else{
// 					this.classList='input-text red';
// 				}
// 			})

// 			//Event for vecicle model
// 			document.getElementById('vehiclemodel').addEventListener('focusout',function(e){
// 				if(this.value.length>2){
					
// 					employeeDetails.vehicleModel=this.value;
// 					this.parentNode.classList.toggle('hide');
// 					this.parentNode.nextElementSibling.classList.toggle('hide');
// 				}
// 				else{
// 					this.classList='input-text red';
// 				}
// 			})

// 			//Event on vehicle type
// 			document.getElementById('type-select').addEventListener('focusout',function(e){
// 				if(this.value!=''){
// 					employeeDetails.vehicleType=this.value;
// 					this.parentNode.classList.toggle('hide');
// 					this.parentNode.nextElementSibling.classList.toggle('hide');
// 				}
// 			})

// 			//Event for vehicle number
// 			document.getElementById('vehiclenumber').addEventListener('focusout',function(e){
// 				if(this.value.length>3){
// 					employeeDetails.vehiclenumber=this.value;
// 					this.parentNode.classList.toggle('hide');
// 					this.parentNode.nextElementSibling.classList.toggle('hide');
// 					this.parentNode.nextElementSibling.childNodes[1].innerHTML='Enter the Id generated above';
// 				}
// 			})

// 			//Event for employee id
// 			document.getElementById('empIdFill').addEventListener('focusout',function(e){
// 				if(this.value.length===5){
// 					employeeDetails.employeeId=this.value;
// 					this.parentNode.classList.toggle('hide');
// 					this.parentNode.nextElementSibling.classList.toggle('hide');
// 					this.parentNode.nextElementSibling.nextElementSibling.classList.toggle('hide');
// 				}
// 			})

// 			//Event for identification field
// 			document.getElementById('identification').addEventListener('focusout',function(e){
// 				employeeDetails.vehicleIdentification=this.value;

// 			})

// 			//Event for submit Vehicle form button
// 			document.getElementById('addVehicleSubmit').addEventListener('click',function(e){
// 				e.preventDefault();
// 				console.log(employeeDetails);
// 				document.getElementById('addVehicleForm').classList.toggle('hide');
// 				//document.getElementById('giveFeedbackForm').classList.toggle('hide');
// 				document.getElementById('mainPrice').classList.toggle('hide');
// 				document.getElementById('addVehicle').childNodes[1].classList.add('dark');
// 				document.getElementById('vehicleregistered').innerHTML='Your '+' '+
// 				employeeDetails.vehicleCompany+' '+employeeDetails.vehicleModel+' '+employeeDetails.vehiclenumber+ ' is registered with Metacube Parking System.';
// 				document.getElementById('nextInfo').innerHTML='Go to pricing section to choose your parking plan';
// 				//document.getElementById('giveFeedbackForm').childNodes[1].classList.toggle('hide');

// 				if(employeeDetails.vehicleType==='Car'){
// 					document.getElementById('Bike').classList.add('hide');
// 					document.getElementById('Cycle').classList.add('hide');
// 					document.getElementById('temp').appendChild(document.getElementById('Car'));
// 				}
// 				else if(employeeDetails.vehicleType==='Bike'){
// 					document.getElementById('Car').classList.add('hide');
// 					document.getElementById('Cycle').classList.add('hide');
// 					document.getElementById('temp').appendChild(document.getElementById('Bike'));
// 				}
// 				else if(employeeDetails.vehicleType==='Cycle'){
// 					document.getElementById('Bike').classList.add('hide');
// 					document.getElementById('Car').classList.add('hide');
// 					document.getElementById('temp').appendChild(document.getElementById('Cycle'));
// 				}


// 				document.getElementById('vehiclemake').value='';
// 				document.getElementById('vehiclemodel').value='';
// 				document.getElementById('type-select').value='';
// 				document.getElementById('vehiclenumber').value='';
// 				document.getElementById('empIdFill').value='';
// 				document.getElementById('identification').value='';


// 			})
// 			//Event Handling for Vehicle Form ends here

// 			const feedback={};
// 			// //Event Handling for Feedback form starts here

// 			// //Event for name
// 			// document.getElementById('feed-name').addEventListener('focusout',function(e){
// 			// 	if(this.value.length>2){
// 			// 		feedback.name=this.value;
// 			// 		this.parentNode.classList.toggle('hide');
// 			// 		this.parentNode.nextElementSibling.classList.toggle('hide');
// 			// 	}
// 			// 	else{
// 			// 		this.classList='input-text red';
// 			// 	}
// 			// })

// 			// //Event handling for email
// 			// document.getElementById('feed-email').addEventListener('focusout',function(e){
// 			// 	if(this.value.includes('@metacube.com')){
// 			// 		feedback.email=this.value;
// 			// 		this.parentNode.classList.toggle('hide');
// 			// 		this.parentNode.nextElementSibling.classList.toggle('hide');

// 			// 	}
// 			// })

// 			// //Event for Subject
// 			// document.getElementById('feed-subject').addEventListener('focusout',function(e){
// 			// 	if(this.value.length>5){
// 			// 		feedback.subject=this.value;
// 			// 		this.parentNode.classList.toggle('hide');
// 			// 		this.parentNode.nextElementSibling.classList.toggle('hide');
// 			// 		this.parentNode.nextElementSibling.nextElementSibling.classList.toggle('hide');
// 			// 	}
// 			// })

// 			// //Event for message
// 			// document.getElementById('feed-message').addEventListener('focusout',function(e){
// 			// 	if(this.value.length>50){
// 			// 		feedback.message=this.value;
// 			// 	}
// 			// })

// 			//Event for submit feedback
// 			document.getElementById('giveFeedbackSubmit').addEventListener('click',function(e){
// 				e.preventDefault();
// 				feedback.name=document.getElementById('feed-name').value;
// 				feedback.email=document.getElementById('feed-email').value;
// 				feedback.subjext=document.getElementById('feed-subject').value;
// 				feedback.message=document.getElementById('feed-message').value;

// 				document.getElementById('feed-name').value='';
// 				document.getElementById('feed-email').value='';
// 				document.getElementById('feed-subject').value='';
// 				document.getElementById('feed-message').value='';
// 				//console.log(feedback);
// 				// console.log(feedback);
// 				// document.getElementById('giveFeedbackForm').classList.toggle('hide');
// 				// document.getElementById('giveFeedback').childNodes[1].classList.add('dark');
// 				// document.getElementById('mainPrice').classList.toggle('hide');
// 			})

// 			//Event Handling for Feedback form ends here

// 			//Event Listener for pricing container
// 			var price=0;
// 			const plans=document.getElementsByClassName('plan-choose');
// 			for(let i = 0 ; i < plans.length ; i++){
// 				plans[i].addEventListener('click',function(e){
// 					price = this.innerHTML;
// 					let temp=price.split(' ');
// 					//console.log(this.parentNode.previousElementSibling.childNodes[1]);
// 					this.parentNode.previousElementSibling.childNodes[1].innerHTML=temp[0];
// 					this.parentNode.previousElementSibling.childNodes[3].innerHTML='/'+temp[1];
// 				});
// 			}
// 			const purchase=document.getElementsByClassName('purchase');
// 			for(let i = 0 ; i < purchase.length ; i++){
// 				purchase[i].addEventListener('click',function(e){

// 					price=this.parentNode.childNodes[3].childNodes[1].innerHTML;
// 					var pricePlan=this.parentNode.childNodes[3].childNodes[3].innerHTML;
// 					employeeDetails.bill=price+' '+pricePlan;
// 					//document.getElementsByClassName('pass-generate')[0].classList.remove('hide');
// 				 	//document.getElementsByClassName('pass-generate')[0].innerHTML=employeeDetails.employeeName+' have to pay '+price+' only.';
				
// 				 	const myPass=document.getElementById('myPass');
// 				 	document.getElementById('passWrapper').classList.remove('hide');
// 				 	myPass.classList.remove('hide');
// 				 	// console.log(myPass.childNodes[3].childNodes[0]);
// 				 	myPass.childNodes[3].childNodes[1].innerHTML=employeeDetails.employeeName;
// 				 	myPass.childNodes[5].childNodes[1].innerHTML=employeeDetails.employeeId;
// 				 	myPass.childNodes[7].childNodes[1].innerHTML=employeeDetails.vehicleType;
// 				 	myPass.childNodes[9].childNodes[1].innerHTML=employeeDetails.vehicleCompany;
// 				 	myPass.childNodes[11].childNodes[1].innerHTML=employeeDetails.vehicleModel
// 				 	myPass.childNodes[13].childNodes[1].innerHTML=employeeDetails.bill;



// 				})
// 			}
// 			//Event listener for pricing container ends here

// 			//convert price into usd
// 			document.getElementById('usd').addEventListener('click',function(e){
// 				const costs=document.getElementsByClassName('plan-choose');
// 				for(let i=0;i<costs.length;i++){
// 					var temp=costs[i].innerHTML;
// 					if(temp[0]==='₹'){
// 						temp=temp.replace('₹','$')
// 						let tempChange=temp.split(' ');
// 						let tempPlan=tempChange[1];
// 						//console.log(tempChange);
// 						tempChange=tempChange[0].split('$');
// 						//console.log(tempChange);
// 						tempChange=parseInt((parseFloat(tempChange[1])/74)*100)/100;
// 						//console.log(tempChange);
// 						costs[i].innerHTML='$'+tempChange+' '+tempPlan;
// 					}
// 					else if(temp[0]=='¥'){
// 						temp=temp.replace('¥','$')
// 						let tempChange=temp.split(' ');
// 						let tempPlan=tempChange[1];
// 						tempChange=tempChange[0].split('$');
// 						tempChange=parseInt((parseFloat(tempChange[1])/106.59)*100)/100;
// 						costs[i].innerHTML='$'+tempChange+' '+tempPlan;
// 					}
// 				}
// 				const curren=document.getElementsByClassName('curren');
// 				for(let i=0;i<curren.length;i++){
// 					var temp=curren[i].innerHTML;
					
// 					if(temp[0]==='₹'){
// 						temp=temp.replace('₹','$')
// 						let tempChange=temp.split(' ');
// 						let tempPlan=tempChange[1];
// 						tempChange=tempChange[0].split('$');
// 						tempChange=parseInt((parseFloat(tempChange[1])/74)*100)/100;
// 						curren[i].innerHTML='$'+tempChange;
// 					}
// 					else if(temp[0]=='¥'){
// 						temp=temp.replace('¥','$')
// 						let tempChange=temp.split(' ');
// 						let tempPlan=tempChange[1];
// 						tempChange=tempChange[0].split('$');
// 						tempChange=parseInt((parseFloat(tempChange[1])/106.59)*100)/100;
// 						curren[i].innerHTML='$'+tempChange;
// 					}
// 				}
// 				// var price=employeeDetails.bill.split('₹');
// 				// console.log(price,price[1],parseInt(price[1]));
// 				// document.getElementById('myPass').childNodes[13].childNodes[1].innerHTML='$'+parseInt((parseInt(price[1])/74.85)*100)/100;
// 			})

// 			//convert in to yen
// 			document.getElementById('yen').addEventListener('click',function(e){
// 				const costs=document.getElementsByClassName('plan-choose');
// 				for(let i=0;i<costs.length;i++){
// 					var temp=costs[i].innerHTML;
// 					//console.log(temp)
// 					if(temp[0]==='₹'){
// 						temp=temp.replace('₹','¥')
// 						let tempChange=temp.split(' ');
// 						//console.log(tempChange);
// 						let tempPlan=tempChange[1];
// 						//console.log(tempPlan);
// 						tempChange=tempChange[0].split('¥');
// 						//console.log(tempChange);
// 						tempChange=parseInt((parseFloat(tempChange[1])*1.42)*100)/100;
// 						//console.log(tempChange);
// 						costs[i].innerHTML='¥'+tempChange+' '+tempPlan;
// 					}
// 					else if(temp[0]=='$'){
// 						temp=temp.replace('$','¥')
// 						let tempChange=temp.split(' ');
// 						let tempPlan=tempChange[1];
// 						tempChange=tempChange[0].split('¥');
// 						//console.log(tempChange[1]);
// 						tempChange=parseInt((parseFloat(tempChange[1])*106.59)*100)/100;
// 						//console.log(tempChange);
// 						costs[i].innerHTML='¥'+tempChange+' '+tempPlan;
// 					}	
// 				}
// 				const curren=document.getElementsByClassName('curren');
// 				for(let i=0;i<curren.length;i++){
// 					var temp=curren[i].innerHTML;
// 					if(temp[0]==='₹'){
// 						temp=temp.replace('₹','¥')
// 						let tempChange=temp.split(' ');
// 						let tempPlan=tempChange[1];
// 						tempChange=tempChange[0].split('¥');
// 						tempChange=parseInt((parseFloat(tempChange[1])*1.42)*100)/100;
// 						curren[i].innerHTML='¥'+tempChange;
// 					}
// 					else if(temp[0]=='$'){
// 						temp=temp.replace('$','¥')
// 						let tempChange=temp.split(' ');
// 						let tempPlan=tempChange[1];
// 						tempChange=tempChange[0].split('¥');
// 						tempChange=parseInt((parseFloat(tempChange[1])*106.59)*100)/100;
// 						curren[i].innerHTML='¥'+tempChange;
// 					}
// 				}
// 				// var price=employeeDetails.bill.split('₹');
// 				// document.getElementById('myPass').childNodes[13].childNodes[1].innerHTML='¥'+parseInt((parseInt(price[1])*1.42)*100)/100;
// 			})

// 			//Event Handling for INR conversion
// 			// document.getElementById('inr').addEventListener('click',function(e){
// 			// 	const costs=document.getElementsByClassName('plan-choose');
// 			// 	for(let i=0;i<costs.length;i++){
// 			// 		var temp=costs[i].innerHTML;
// 			// 		//console.log(temp)
// 			// 		if(temp[0]==='$'){
// 			// 			temp=temp.replace('$','₹')
// 			// 			let tempChange=temp.split(' ');
// 			// 			//console.log(tempChange);
// 			// 			let tempPlan=tempChange[1];
// 			// 			//console.log(tempPlan);
// 			// 			tempChange=tempChange[0].split('₹');
// 			// 			//console.log(tempChange);
// 			// 			tempChange=parseInt((parseFloat(tempChange[1])*74)*100)/100;
// 			// 			//console.log(tempChange);
// 			// 			costs[i].innerHTML='₹'+tempChange+' '+tempPlan;
// 			// 		}
// 			// 		else{
// 			// 			temp=temp.replace('¥','₹')
// 			// 			let tempChange=temp.split(' ');
// 			// 			let tempPlan=tempChange[1];
// 			// 			tempChange=tempChange[0].split('₹');
// 			// 			console.log(tempChange[1]);
// 			// 			tempChange=parseInt((parseFloat(tempChange[1])/1.42)*100)/100;
// 			// 			console.log(tempChange);
// 			// 			costs[i].innerHTML='₹'+tempChange+' '+tempPlan;
// 			// 		}	
// 			// 	}
// 			// 	const curren=document.getElementsByClassName('curren');
// 			// 	for(let i=0;i<curren.length;i++){
// 			// 		var temp=curren[i].innerHTML;
// 			// 		if(temp[0]==='$'){
// 			// 			temp=temp.replace('$','₹')
// 			// 			let tempChange=temp.split(' ');
// 			// 			let tempPlan=tempChange[1];
// 			// 			tempChange=tempChange[0].split('₹');
// 			// 			tempChange=parseInt((parseFloat(tempChange[1])*74)*100)/100;
// 			// 			curren[i].innerHTML='₹'+tempChange;
// 			// 		}
// 			// 		else{
// 			// 			temp=temp.replace('¥','₹')
// 			// 			let tempChange=temp.split(' ');
// 			// 			let tempPlan=tempChange[1];
// 			// 			tempChange=tempChange[0].split('₹');
// 			// 			tempChange=parseInt((parseFloat(tempChange[1])/1.42)*100)/100;
// 			// 			curren[i].innerHTML='₹'+tempChange;
// 			// 		}
// 			// 	}
// 			// 	// var price=employeeDetails.bill.split('₹');
// 			// 	// document.getElementById('myPass').childNodes[13].childNodes[1].innerHTML='¥'+parseInt((parseInt(price[1])*1.42)*100)/100;
// 			// })