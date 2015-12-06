(function() {
    var login = function (account, code, pass) {
        document.forms[1].account.value = account;
        document.forms[1].codenum.value = code;
        document.forms[1].password.value = pass;
        document.forms[1].action='/reselve/k_HomeMenuInitial.do';
        document.forms[1].submit();
    };
    chrome.runtime.sendMessage({type: "login"},function(response) {
        login(response.account, response.code, response.pass);
    });
})();
