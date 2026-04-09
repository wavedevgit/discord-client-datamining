/** chunk id: 755439 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(311907),
    l = n(73153),
    a = n(613057);
let r = null,
    s = [a.Hi.REDISTRIBUTABLE_INSTALL_FAILED, a.Hi.POST_INSTALL_FAILED, a.Hi.POST_INSTALL_CANCELLED],
    o = [a.Hi.APPLICATION_NOT_FOUND, a.Hi.APPLICATION_LOAD_FAILED, a.Hi.INTERRUPTED, a.Hi.DESERIALIZATION_FAILED];
class c extends i.Ay.Store {
    static displayName = "DispatchApplicationErrorStore";
    getLastError() {
        return r
    }
}
let u = new c(l.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
        null != r && null != r.code && s.includes(r.code) && (r = null)
    },
    DISPATCH_APPLICATION_ERROR: function(e) {
        let {
            error: t
        } = e;
        r = null != t.code && o.includes(t.code) ? null : t
    }
})