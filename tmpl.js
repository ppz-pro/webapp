export default function Template(_tmpl) {
  return function(data) {
    const cont = document.createElement('template')
    cont.innerHTML = _tmpl(data)
    return cont.content
  }
}