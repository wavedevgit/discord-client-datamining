/** chunk id: 84002 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(652215);
let a = "<removed>";

function l(e) {
    var t, n;
    let l = {
        ...e
    };
    return "object" == typeof(t = l).args && "string" == typeof t.cmd && (l = function(e) {
        switch (e.cmd) {
            case i.e$_.AUTHENTICATE:
            case i.e$_.GET_PROVIDER_ACCESS_TOKEN:
                return {
                    ...e, args: {
                        ...e.args,
                        access_token: a
                    }
                };
            default:
                return {
                    ...e
                }
        }
    }(l)), "object" == typeof(n = l).data && "string" == typeof n.cmd && (l = function(e) {
        switch (e.cmd) {
            case i.e$_.AUTHENTICATE:
            case i.e$_.GET_PROVIDER_ACCESS_TOKEN:
                return {
                    ...e, data: {
                        ...e.data,
                        access_token: a
                    }
                };
            default:
                return {
                    ...e
                }
        }
    }(l)), l
}