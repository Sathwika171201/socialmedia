let users = [];
function showLogin() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data))
    .catch((err) => console.log(err));
}
function showAlbums(id){
  let str=""
  fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
    .then((res) => res.json())
    .then((data) =>{    
      data.map((value)=>{
        str+=`<li> ${value.title}</li>
      `;
    });
    content.innerHTML=str;
  })
    .catch((err) => console.log(err));

}

function showPosts(id){
  let str=""
  fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
    .then((res) => res.json())
    .then((data) =>{    
      data.map((value)=>{
        str+=`<b> ${value.title}</b>
        <p> ${value.body}</p>`;
    });
    content.innerHTML=str;
  })
    .catch((err) => console.log(err));
    
}

function showProfile(id){
  let str=""
  fetch(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
    .then((res) => res.json())
    .then((data) =>{    
      data.map((value)=>{
        str+=`<p class="fs-1">${value.name}</p>
        <p>${value.username}</p>
        <p class="fs-4"> <h3>Contact</h3>
        <p><b>Email:</b>${value.email}|<b>Phone:</b>${value.phone}|<b>Address:</b>${value.address.street},${value.address.city},${value.address.zipcode} </p>
        </p>
        <p class="fs-4"><h3>Workspace</h3>
        <p>${value.company.name }</p>
        <p>  ${value.company.catchPhrase}</p>
         <p>${value.website}</p>
        </p>

        
        `;
    });
    content.innerHTML=str;
  })
    .catch((err) => console.log(err));
    
}
function getuserInfo(){

}

function showHome(){
  let userId=selUser.value;
  
    let str=`
  <div class=" container-fluid ">
    <div class="row">

       <div class="d-flex justify-content-between bg-secondary text-dark">
         <div>My Space</div>
         <div id="username">
         
         </div>
       </div>

    </div>

    <div class="row mt-3">
      <div class=" d-flex ">
        <div class="p-2 ">
          <p onclick="showPosts()">Home</p>
          <p onclick="showAlbums(${userId})">Album</p>
          <p onclick="showProfile(${userId})">Profile</p>
          <p onclick="showLogin()">Logout</p>
        </div>
        <div class ="p-5  " id="content"></div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="bg-dark text-light p-5">
         <p> @Copyright 2025. All rights reserved.</p>
      </div>
    </div>


  </div>
  `;
root.innerHTML=str
showPosts(userId);

}

function displayUsers(data) {
  let str = `
  <div class='d-flex justify-content-center'>
  <div class="p-5" >
  <h2>My Social Media</h2>
  <p> This is the caption of the website.</p>
  </div>
  <div class='p-5 '>
  <select class='form-control m-3'id="selUser" >
  <option value='0'>--Select User--</option>`;
  data.map((value) => {
    str += `<option value=${value.id}>${value.name}</option>`;
  });
  str += `</select>
  <p class="p-3"> <button class='form-control m-3 btn btn-outline-success' onclick='showHome()'>Login</button></p> </div> </div>`
  root.innerHTML = str
}
