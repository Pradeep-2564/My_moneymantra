/* Reset and box-sizing */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* General body settings */
  body {
    font-family: sans-serif;
  }
  
  /* Navbar Styling */
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #d8c4c4;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  #logo img {
    width: 150px;
  }
  
  ul.list {
    list-style: none;
    display: flex;
    align-items: center;
  }
  
  ul.list li {
    position: relative;
    margin: 0 15px;
  }
  
  ul.list li a {
    text-decoration: none;
    color: #297289;
    font-size: 16px;
    /* padding: 10px 15px; */
    display: inline-flex;
    align-items: center;
    font-weight: bolder;
  }
  
  
  /* Arrow Icon */
  ul.list li a .arrow {
    margin-left: 15px;
    transition: transform 0.3s ease;
  }
  
  /* Dropdown Styling */
  ul.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    color: #297289;
    border-radius: 5px;
    padding: 9px 0;
    min-width: 200px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
  
  ul.dropdown-content li {
    display: block;
  }
  
  ul.dropdown-content li a {
    color: #297289; 
    font-size: 14px;
    padding: 7px 15px;
    display: flex;
    align-items: center;
    /* margin: 5px 0; */
  }
  
  ul.dropdown-content li a:hover {
    background-color: #297289;
    color: white;
    border-radius: 4px;
  }
  
  ul.list li:hover > ul.dropdown-content {
    display: block;
    opacity: 1;
    visibility: visible;
  }
  
  /* Nested Dropdown */
  ul.dropdown-content ul.dropdown-content {
    left: 100%;
    top: 0;
    border-radius: 5px;
    padding: 9px 0px;
  }
  
  /* Single Line Menu Items */
  ul.dropdown-content li {
    white-space: nowrap;
  }
  
  /* Hover Effect for Nested Dropdown */
  ul.list li:hover > ul.dropdown-content > li:hover > ul.dropdown-content {
    display: block;
  }
  
  /* Search Bar */
  input[type="text"] {
    padding: 8px;
    margin-left: 20px;
    border: none;
    border-radius: 4px;
    width: 150px;
    transition: width 0.3s ease;
  }
  
  input[type="text"]:focus {
    width: 200px;
    outline: none;
  }
  
  /* Button Styling */
  button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  /* Contact Icon */
  #contact-num {
    width: 35px;
    height: 35px;
    margin-left: 20px;
    cursor: pointer;
  }
  
  /* Responsive Design */
  @media screen and (max-width: 768px) {
    .nav-container {
      flex-direction: column;
      padding: 10px 20px;
    }
  
    ul.list {
      flex-direction: column;
      width: 100%;
    }
  
    ul.list li {
      width: 100%;
      text-align: center;
    }
  
    button {
      width: 100%;
      margin-top: 10px;
    }
  
    input[type="text"] {
      width: 100%;
      margin-top: 10px;
    }
    .btn {
      width: 100%;
      justify-content: space-between;
    }
   
    .btn button {
      width: 45%;
    }
    .search {
      width: 100%;
      margin-top: 10px;
      justify-content: space-between;
    }
   
    .search input {
      width: 60%;
    }
  }
  
  .search {
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;
  }
  
  .search input {
    padding: 8px;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
    outline: none;
    background-color: #555;
    color: #338C8F;
    width: 0; /* Initially hide the input */
    opacity: 0;
    transition: width 0.3s ease, opacity 0.3s ease; /* Transition for the input's appearance */
  }
  
  .search input.active {
    width: 150px;
    opacity: 1;
  }
  
  .search svg {
    color: #338C8F;
    cursor: pointer;
  }
  .btn {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
   
  .btn button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;
    margin-right: 10px;
  }
   
  .btn img {
    width: 30px;
  }
   
  .btn button:nth-child(2) {
    background-color: #338C8F;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 14px;
  }
  
  .list-icon svg {
    margin-left: auto; /* Pushes the icon to the end */
  }