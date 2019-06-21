let webExtensionAPI
try {
  webExtensionAPI = browser //ffox
} catch {
  webExtensionAPI = chrome
}

const DEBUG = false
var { host, pathname, origin, pathname, search, hash } = document.location

let utm_source = "blog"
let utm_medium = "devto"
let utm_campaign = "devex"

if (DEBUG) console.log({ location: document.location })

function createLabeledInput(id, value) {
  var label = document.createElement("label")
  label.setAttribute("style", "display: block")
  var input = document.createElement("input")
  input.setAttribute("id", "ndx_" + id)
  input.setAttribute("value", value)
  label.appendChild(document.createTextNode(id + ": "))
  label.appendChild(input)
  if (id === "Medium") label.setAttribute("style", "color: pink")
  return label
}

if (["www.netlify.com", "app.netlify.com"].includes(host)) {
  var container = document.createElement("div")
  container.setAttribute("style", "border: 3px solid blue; padding: 1rem; text-align: center")
  container.appendChild(document.createTextNode("Netlify DX UTM Extension"))
  container.appendChild(createLabeledInput("Campaign", "devex"))
  container.appendChild(createLabeledInput("Source", "blog"))
  container.appendChild(createLabeledInput("Medium", "csstricks"))
  // utm_source=blog&utm_medium=devto&utm_campaign=devex`

  var button = document.createElement("button")
  button.innerHTML = "💎 Copy with UTM code"
  button.setAttribute(
    "style",
    "border: 3px solid blue; padding: 1rem; text-align: center; margin: 1rem; border-radiux: 10px"
  )
  button.addEventListener("click", function() {
    const input1 = document.getElementById("ndx_Source")
    const input2 = document.getElementById("ndx_Medium")
    const input3 = document.getElementById("ndx_Campaign")
    const utm_source = input1.value
    const utm_medium = input2.value
    const utm_campaign = input3.value
    const utm = `utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`
    const _search = search ? search + "&" + utm : "?" + utm
    const urlWithUTM = origin + pathname + _search + hash
    console.log({ urlWithUTM })
    button.innerHTML = "⚒️ copying..."
    navigator.clipboard
      .writeText(urlWithUTM)
      .then(() => {
        console.log("Text copied.")
      })
      .catch(() => {
        console.log("Failed to copy text.")
      })
    button.innerHTML = "💎 Copied!"
  })
  container.appendChild(button)
  const firstChild = document.body.firstChild
  firstChild.parentNode.insertBefore(container, firstChild)
}
