document.addEventListener("DOMContentLoaded", function() {

    const nameInput =document.getElementById("name");
    const emailInput =document.getElementById("email");
    const ageInput =document.getElementById("age");
    const submitButton =document.getElementById("submit");
    const submissionsList =document.querySelector(".submissions-list");
  
    
    submitButton.addEventListener("click", function(event) 
    {
      event.preventDefault(); 
  
      
      const name = nameInput.value;
      const email = emailInput.value;
      const age = ageInput.value;
  
      
      if (name&&email&&age) 
        {
        
        const submissionItem=document.createElement("div");
        submissionItem.classList.add("submission-item");

        submissionItem.innerHTML = 
        `
          <div class="submission-details">
            <div class="detail-row">
              <p class="detail-label">Name:</p>
              <p class="detail-value">${name}</p>
            </div>
            <div class="detail-row">
              <p class="detail-label">Email:</p>
              <p class="detail-value">${email}</p>
            </div>
            <div class="detail-row">
              <p class="detail-label">Age:</p>
              <p class="detail-value">${age}</p>
            </div>
          </div>
        `
  
        
        submissionsList.appendChild(submissionItem);
  
        nameInput.value ="";
        emailInput.value ="";
        ageInput.value ="";
        } 

      else 
        {
          alert("Please fill out all fields.");
        } 
    });
    });
  