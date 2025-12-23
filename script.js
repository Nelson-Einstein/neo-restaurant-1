// Smooth scroll
document.getElementById("menuBtn")?.addEventListener("click", () => {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

// Chatbot logic
const chatInput = document.getElementById("chatInput");
const chatBody = document.getElementById("chatBody");

if (chatInput && chatBody) {
  chatInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && chatInput.value.trim() !== "") {
      const msg = chatInput.value;

      chatBody.innerHTML += `<p><b>You:</b> ${msg}</p>`;
      chatInput.value = "";

      fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg })
      })
      .then(res => res.json())
      .then(data => {
        chatBody.innerHTML += `<p><b>AI:</b> ${data.reply}</p>`;
        chatBody.scrollTop = chatBody.scrollHeight;
      })
      .catch(() => {
        chatBody.innerHTML += `<p><b>AI:</b> (Backend not running)</p>`;
      });
    }
  });
}