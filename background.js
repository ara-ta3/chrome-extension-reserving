(function(localStorage) {
    var getAccounts = function() {
        var str = localStorage.getItem("account-storage-key");
        return JSON.parse(str);
    };
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
        if(message.type === "login" ) {
            sendResponse(getAccounts());
        } else {
            sendResponse("invalid type");
        }
    });
    chrome.browserAction.onClicked.addListener(function() {
        chrome.tabs.create({ url: "https://www.keyakinet.jp/reselve/k_LoginInitial.do" });
    });
})(localStorage);
