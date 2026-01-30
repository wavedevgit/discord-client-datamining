/** chunk id: 10088, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => f
});
var n, o, l = r(311907),
    c = r(73153),
    u = r(652215);
let i = null,
    a = {};
class p extends(o = l.Ay.Store) {
    getState(e) {
        return a[e]
    }
    getHighestState() {
        return i
    }
}(n = "displayName") in p ? Object.defineProperty(p, n, {
    value: "CodedLinkNativeAppStateStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : p[n] = "CodedLinkNativeAppStateStore";
let f = new p(c.h, {
    NATIVE_APP_MODAL_OPENING: function(e) {
        let {
            code: t
        } = e;
        a[t] = u.fAW.OPENING, null === i && (i = u.fAW.OPENING)
    },
    NATIVE_APP_MODAL_OPENED: function(e) {
        let {
            code: t
        } = e;
        a[t] = u.fAW.OPEN, i = u.fAW.OPEN
    },
    NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
        let {
            code: t
        } = e;
        a[t] = u.fAW.OPEN_FAIL, (null === i || i === u.fAW.OPENING) && (i = u.fAW.OPEN_FAIL)
    }
})