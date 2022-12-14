fetch('pkg/add_one_bg.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
  instance = results.instance;
  document.getElementById("container").innerText = instance.exports.add_one(41);
}).catch(console.error);

console.log('done')
