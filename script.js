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

chrome.storage.local.get(null, function(obj) {
    let locStore = obj['locations']
    console.log(locStore)
    locStore.forEach(function(loc) {
        if (window.location.href.indexOf(loc) > 0) {
            console.log('match loc')
            addStyle(style);
        }
    })
});
