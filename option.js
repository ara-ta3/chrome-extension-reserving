(function(localStorage, document) {
    var Repository = function(localStorage) {
        var STORAGE_KEY = "account-storage-key"
        this.get = function() {
            var str = localStorage.getItem(STORAGE_KEY);
            return JSON.parse(str);
        };

        this.set = function(account, code, pass) {
            var str = JSON.stringify({
                account: account,
                code: code,
                pass: pass
            });
            localStorage.setItem(STORAGE_KEY, str);
        }
    };

    var repository = new Repository(localStorage);
    var save = function() {
        return repository.set(
                document.getElementById("account").value,
                document.getElementById("code").value,
                document.getElementById("pass").value
                );
    };
    var data = repository.get();
    document.getElementById("account").value = data.account;
    document.getElementById("code").value = data.code;
    document.getElementById("pass").value = data.pass;
    document.getElementById("save").onclick = save;
})(localStorage, document);
