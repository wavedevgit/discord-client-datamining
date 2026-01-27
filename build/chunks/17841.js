/** Chunk was on 86142 **/
/** chunk id: 17841, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r, i, s = n(664294),
    l = n(311907),
    a = n(73153),
    o = n(723702),
    c = n(204925);
let d = null,
    u = "underage";
class h extends(i = l.Ay.Store) {
    isUnderageAnonymous() {
        if (o.isPlatformEmbedded && 1) {
            if (null != d && d + c.bm > Date.now()) return !0
        } else if (1) return null != s.parse(document.cookie)[u];
        return !1
    }
}(r = "displayName") in h ? Object.defineProperty(h, r, {
    value: "AgeGateStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : h[r] = "AgeGateStore";
let p = new h(a.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
        d = Date.now(), document.cookie = "".concat(u, "=1;path=/")
    },
    LOGIN_SUCCESS: function() {
        d = null, document.cookie = "".concat(u, "=1;path=/;max-age=0")
    }
})