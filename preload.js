// preload.js

// 所有的 Node.js API接口 都可以在 preload 进程中被调用.
// 它拥有与Chrome扩展一样的沙盒。
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })

const { contextBridge, ipcRenderer } = require('electron');
// const { Tiktoken } = require("tiktoken/lite");
// const { load } = require("tiktoken/load");
// const registry = require("tiktoken/registry.json");
// const models = require("tiktoken/model_to_encoding.json");
const tiktoken = require("tiktoken")
let encoding = tiktoken.encoding_for_model("gpt-3.5-turbo")
let tokens = encoding.encode("langchainjs调用tiktoken示例代码").length

      console.log(tokens)

// const model = load(registry[models["gpt-3.5-turbo"]]);


    