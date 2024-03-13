

async function main() {
    alert("123")
    const tokens = await window.electronAPI.encodeText("hello world");
    console.log("need:" + tokens);
    alert(tokens)
  }

//   main();