
let titleInput = document.getElementById('title-input')
let bodyInput = document.getElementById('body-input')
let saveBtn = document.getElementById('save-btn')
let ideaContainer = document.getElementById('idea-container')

saveBtn.addEventListener('click', () => {
  let ideaDiv = document.createElement('div')
  let h2Node = document.createElement('h2')
  let pNode = document.createElement('p')
  let deleteNode = document.createElement('button')

  let titleNode = document.createTextNode(titleInput.value)
  let bodyNode = document.createTextNode(bodyInput.value)
  let deleteBtn = document.createTextNode('Delete')

  h2Node.appendChild(titleNode)
  pNode.appendChild(bodyNode)
  deleteNode.appendChild(deleteBtn)

  h2Node.setAttribute('contenteditable', true)
  pNode.setAttribute('contenteditable', true)

  ideaDiv.appendChild(h2Node)
  ideaDiv.appendChild(pNode)
  ideaDiv.appendChild(deleteNode)

  deleteNode.addEventListener('click', () => {
    ideaDiv.remove()
  })

  ideaContainer.appendChild(ideaDiv)

  titleInput.value = ''
  bodyInput.value = ''
})
