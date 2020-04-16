var file = chrome.runtime.getURL('locations.txt')

var style = `
    * {
        border-radius: 0!important;
    }
`

function addStyle(styleString) {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
}

fetch(file)
  .then((response) => response.text())
  .then(data => {
    const locations = data.split(/\r?\n/)
    console.log(locations)

    locations.forEach(function(loc) {
        if (window.location.href.indexOf(loc) > 0) {
            console.log('match loc')
            addStyle(style);
        }
    })
    
})
