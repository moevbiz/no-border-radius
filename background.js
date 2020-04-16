chrome.runtime.onInstalled.addListener(function(details){
    

    if(details.reason == "install"){
        console.log("first install")

        var file = chrome.runtime.getURL('locations.txt')

        fetch(file)
        .then((response) => response.text())
        .then(data => {
            const locations = data.split(/\r?\n/)
            // console.log(locations)
            chrome.storage.local.set({'locations': locations})
        })

    } else if (details.reason == "update") {
        var thisVersion = chrome.runtime.getManifest().version;
        console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
        chrome.storage.local.get(null, function(obj) {
            let locStore = obj['locations']
            console.log('Stored locations: ' + locStore)
        })
    } else {
        console.log('oninstalled')
    }
});