function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }
  
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) return value;
    }
    return null;
  }
  
  const userForm = document.getElementById("user-form");
  const userDataDisplay = document.getElementById("user-data");
  

  window.addEventListener("load", () => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
  
    if (name && email) {
      userDataDisplay.textContent = `Name: ${name}, Email: ${email}`;
    }
  

    const theme = getCookie("theme");
    if (theme) {
      document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
    }
  });
  

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  
    userDataDisplay.textContent = `Name: ${name}, Email: ${email}`;
  });
  

  const greetingSelect = document.getElementById("greeting");
  const greetingButton = document.getElementById("save-greeting");
  const greetingMessage = document.getElementById("greeting-message");
  

  greetingButton.addEventListener("click", () => {
    const greeting = greetingSelect.value;
    sessionStorage.setItem("greeting", greeting);
    greetingMessage.textContent = greeting;
  });
  

  window.addEventListener("load", () => {
    const greeting = sessionStorage.getItem("greeting");
    if (greeting) {
      greetingMessage.textContent = greeting;
    }
  });

  const lightThemeButton = document.getElementById("light-theme");
  const darkThemeButton = document.getElementById("dark-theme");
  
  lightThemeButton.addEventListener("click", () => {
    document.body.className = "light-theme";
    setCookie("theme", "light", 7);
  });
  
  darkThemeButton.addEventListener("click", () => {
    document.body.className = "dark-theme";
    setCookie("theme", "dark", 7);
  });
  