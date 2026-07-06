async function send(){
  let input = document.getElementById("input");
  let text = input.value;

  add("Você", text, "user");

  let res = await fetch("http://localhost:3000/chat", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({message: text})
  });

  let data = await res.json();

  add("CAINE", data.reply, "ai");

  input.value = "";
}
