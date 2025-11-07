
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginMessage = document.getElementById("loginMessage");

  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (email === "" || password === "") {
        loginMessage.textContent = "Please fill in both fields.";
        return;
      }


      if (email === "omar@gmail.com" && password === "1234") {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Login successful!";
        setTimeout(() => {
          window.location.href = "profile.html";
        }, 1000);
      } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Invalid email or password.";
      }
    });
  }


  const followBtn = document.getElementById("followBtn");
  const followMessage = document.getElementById("followMessage");

  if (followBtn) {
    let following = false;

    followBtn.addEventListener("click", function () {
      following = !following;

      if (following) {
        followBtn.textContent = "Unfollow";
        followBtn.style.background = "#fff";
        followBtn.style.color = "#111";
        followMessage.style.color = "green";
        followMessage.textContent = "You followed Omar!";
        document.body.style.background = "#e8e8e8";
      } else {
        followBtn.textContent = "Follow";
        followBtn.style.background = "#111";
        followBtn.style.color = "#fff";
        followMessage.style.color = "red";
        followMessage.textContent = "You unfollowed Omar!";
        document.body.style.background = "#f1f1f1";
      }
    });
  }
});
