const xhr = new XMLHttpRequest()

xhr.open('get', '/data/json.json', false)

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 &&  xhr.status === 200) {
    console.log(xhr.responseText);
  }
}

xhr.send(null)
sessionStorage