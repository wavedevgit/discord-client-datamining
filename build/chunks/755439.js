/** chunk id: 755439 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(311907),
    r = n(73153),
    s = n(613057);
let a = null,
    l = [s.Hi.REDISTRIBUTABLE_INSTALL_FAILED, s.Hi.POST_INSTALL_FAILED, s.Hi.POST_INSTALL_CANCELLED],
    o = [s.Hi.APPLICATION_NOT_FOUND, s.Hi.APPLICATION_LOAD_FAILED, s.Hi.INTERRUPTED, s.Hi.DESERIALIZATION_FAILED];
class c extends i.Ay.Store {
    static displayName = "DispatchApplicationErrorStore";
    getLastError() {
        return a
    }
}
let u = new c(r.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
        null != a && null != a.code && l.includes(a.code) && (a = null)
    },
    DISPATCH_APPLICATION_ERROR: function(e) {
        let {
            error: t
        } = e;
        a = null != t.code && o.includes(t.code) ? null : t
    }
})