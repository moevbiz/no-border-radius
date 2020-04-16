let ul = document.querySelector('ul')

chrome.storage.local.get(null, function(obj) {
    // console.log(locStore)
    let locStore = obj['locations']
    let input = document.querySelector('input')
    locStore.forEach(function(loc) {
        createListEntry(loc, locStore)
    })
    let addButton = document.querySelector('#addUrl')
    addButton.addEventListener('click', function() {
        createListEntry(input.value)
        locStore.push(input.value)
        chrome.storage.local.set({'locations': locStore})
    })
})

function createListEntry(loc, locStore) {
    let button = document.createElement('button')
        button.innerText = 'remove'
        button.addEventListener('click', function() {
            const index = locStore.indexOf(loc);
            if (index > -1) {
                locStore.splice(index, 1);
                chrome.storage.local.set({'locations': locStore})
                this.parentElement.remove()
            }
        })
    let li = document.createElement('li')
    li.innerHTML = loc
    li.appendChild(button)
    ul.appendChild(li)
}