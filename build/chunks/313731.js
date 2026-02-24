/** chunk id: 313731, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(735438),
    r = n.n(i),
    l = n(636401),
    a = n(652215);
class s {
    transport;
    version;
    encoding;
    id = r().uniqueId();
    authorization = {
        authing: !1,
        scopes: [],
        accessToken: null,
        expires: new Date(0)
    };
    application = {
        id: null,
        name: null,
        icon: null
    };
    abortController = new AbortController;
    constructor(e, t, n) {
        this.transport = e, this.version = t, this.encoding = n, this.checkRpcVersion(t)
    }
    checkRpcVersion(e) {
        if (null == e || e > a.dL4 || e < 1) throw new l.A({
            closeCode: a.YI$.INVALID_VERSION
        }, `Invalid Version: ${e}`)
    }
}