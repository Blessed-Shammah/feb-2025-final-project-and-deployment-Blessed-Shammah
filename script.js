function filterPosts(category) {
  const posts = document.querySelectorAll(".post");
  const buttons = document.querySelectorAll(".flex button");

  // Update button states
  buttons.forEach((btn) => btn.classList.remove("active", "bg-indigo-500", "text-white"));
  event.target.classList.add("active", "bg-indigo-500", "text-white");

  // Filter posts
  posts.forEach((post) => {
    if (category === "all" || post.classList.contains(category)) {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  });
}

function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formMessage = document.getElementById("form-message");

  if (name.length < 2) {
    formMessage.textContent = "Name must be at least 2 characters.";
    formMessage.style.color = "red";
    return false;
  }

  if (!email.includes("@")) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
    return false;
  }

  if (message.length < 10) {
    formMessage.textContent = "Message must be at least 10 characters.";
    formMessage.style.color = "red";
    return false;
  }

  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  return true;
}