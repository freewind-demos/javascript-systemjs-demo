define([], function () {
  return {
    hello: function (elementId) {
      document.getElementById(elementId).innerText = 'Hello! (from hello-amd.js)'
    }
  }
})
